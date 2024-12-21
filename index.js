import {
	colorNamesBasic,
	colorNames256,
	moreColorNames,
	ansiSpecial
} from './color-names.js';

import {	
	HSLtoRGB,
	RGBtoHSL,
	deltaE
} from './rgb.js';

import ansiEscapes from './ansi-escapes.js'

//---------------------------------------------------------------

import {hasBasic, has256, has16m} from './supports-color.js';

const isBasic = !has256 && !has16m;
const is256 = has256 && !has16m;
const is16m = has16m;

//---------------------------------------------------------------

const reset = ansiSpecial.filter(o=>o.name==='reset')[0].ansi;
const clear = '\x1B[1;1f';
const clearAll = '\x1B[1;1f\x1Bc';
const fg_default = '\x1B[39m';
const bg_default = '\x1B[49m';

//---------------------------------------------------------------

function gradient(obj){
	const text_arr = obj.text.split('');
	const len = text_arr.length;
	var fg_rgb = [];
	var bg_rgb = [];

	if (obj.fg && obj.fg.constructor === Array){
		fg_rgb = colorGradient(obj.fg, len);
	}
	if (obj.bg && obj.bg.constructor === Array){
		bg_rgb = colorGradient(obj.bg, len);
	}

	return text_arr.map((char,i)=>{
		const fgc = fg_rgb && fg_rgb[i] ? getAdjustedColor({rgb:fg_rgb[i]}).fg : ''
		const bgc = bg_rgb && bg_rgb[i] ? getAdjustedColor({rgb:bg_rgb[i]}).bg : ''
		return `${fgc}${bgc}${char}`
	}).join('')+reset;

}

//---------------------------------------------------------------

function colorGradient(grad, len){
	
	grad.sort((a,b)=>{
		return a.offset > b.offset ? 1 : a.offset < b.offset ? -1 : 0;
	});

	if (grad[0].offset === undefined){
		grad.forEach((o,i)=>{
			o.offset = (1 / (grad.length-1)) * i;
		});
	}

	return grad.reduce((a, color, idx)=>{
		if (color.offset === undefined){return a}
		const c1 = color.r !== undefined &&
			color.g !== undefined &&
			color.b !== undefined ?
				RGBtoHSL(color.r, color.g, color.b) : color;

		let nextColor = grad[idx+1];
		if (nextColor === undefined){
			nextColor = {h:c1.h, s:c1.s, l: c1.l, offset: 1}
		} else {
			if (nextColor.offset === undefined){
				return a
			}
		}

		const c2 = nextColor.r !== undefined &&
			nextColor.g !== undefined &&
			nextColor.b !== undefined ? 
				RGBtoHSL(nextColor.r, nextColor.g, nextColor.b) : nextColor;

		const dist = (nextColor.offset - color.offset);

		const steps = Math.round(dist * len);
		
		const inc = dist / steps;

		const h_dist = c2.h - c1.h;
		const s_dist = c2.s - c1.s;
		const l_dist = c2.l - c1.l;

		const h_inc = h_dist / steps;
		const s_inc = s_dist / steps;
		const l_inc = l_dist / steps;
		
		for (let i=1;i<steps;i++){
			const h = c1.h + (h_inc * i);
			const s = c1.s + (s_inc * i);
			const l = c1.l + (l_inc * i);
			const this_rgb = HSLtoRGB(h, s, l);
			a.push(this_rgb)
		}

		
		return a
	},[])	
}

//---------------------------------------------------------------

function getClosestColorBasic(c_rgb, bg){
	const rgbcol = [c_rgb.r, c_rgb.g, c_rgb.b];
  const mcolor = colorNamesBasic.reduce((a, o, idx)=>{
    const de = deltaE(rgbcol, [o.rgb.r, o.rgb.g, o.rgb.b]);
    if (
      a.hmatch === undefined ||
      a.hmatch > de//smaller de is closer to the color
    ){
      a.hmatch = de;
      a.matched = o;
			a.idx = idx;
    }
    return a
  },{hmatch:undefined, matched: undefined, idx: -1});
		
	return `\u001b[${bg?mcolor.matched.bg:mcolor.matched.fg}m`
}

//---------------------------------------------------------------

function getClosestColor256(c_rgb, bg){
	//https://gist.github.com/HendrixString/ed994b8a57563a9934bb90ca1fae2de5
	 const r5 = Math.round((c_rgb.r/255)*5);
	 const g5 = Math.round((c_rgb.g/255)*5);
	 const b5 = Math.round((c_rgb.b/255)*5);
	 const calc = 16 + 36 * r5 + 6 * g5 + b5;

	return `\u001b[${bg?'48':'38'};5;${calc}m`;
}

//---------------------------------------------------------------

function getAdjustedColor(c){
	if (isBasic){
		var fg = getClosestColorBasic(c.rgb, false)
		var bg = getClosestColorBasic(c.rgb, true)
	} else	if (is256){
		var fg = getClosestColor256(c.rgb, false)
		var bg = getClosestColor256(c.rgb, true)
	} else if (is16m){
		var fg = `\u001b[38;2;${c.rgb.r};${c.rgb.g};${c.rgb.b}m`;
		var bg = `\u001b[48;2;${c.rgb.r};${c.rgb.g};${c.rgb.b}m`
	}
	return {fg, bg}
}

//---------------------------------------------------------------

const allColors = colorNamesBasic.concat(colorNames256, moreColorNames).reduce((a,o)=>{
	a[o.name] = o.rgb
	const c = getAdjustedColor({rgb:o.rgb, name: o.name});
	return a
 },{});

 //---------------------------------------------------------------

const maxNameLen = Object.keys(allColors).reduce((a,o)=>{
	if (o.length > a){
		return o.length
	}
	return a
},0) + 3;

//---------------------------------------------------------------

const fg_black = getAdjustedColor({rgb:{r:0,g:0,b:0}}).fg
const fg_white = getAdjustedColor({rgb:{r:255,g:255,b:255}}).fg

//---------------------------------------------------------------
function list(){
	colorNamesBasic.forEach(c => {
		const {fg, bg} = getAdjustedColor(c);
		const space = new Array(((maxNameLen+3) - c.name.length)).fill(' ').join('');
		const hsl = RGBtoHSL(c.rgb.r, c.rgb.g, c.rgb.b);
		const bg_text_color = hsl.l < .4 ? fg_white : fg_black;
		console.log(`${fg}fg_${c.name}${reset}${space}${bg}${bg_text_color}bg_${c.name}${reset}`)
	});

 colorNames256.forEach(c => {
	const {fg, bg} = getAdjustedColor(c);
	const space = new Array((maxNameLen+3 - c.name.length)).fill(' ').join('')
	const hsl = RGBtoHSL(c.rgb.r, c.rgb.g, c.rgb.b);
	const bg_text_color = hsl.l < .4 ? fg_white : fg_black;
	console.log(`${fg}fg_${c.name}${reset}${space}${bg}${bg_text_color}bg_${c.name}${reset}`)
 });

 moreColorNames.forEach(c => {
	const {fg, bg} = getAdjustedColor(c);
	const space = new Array((maxNameLen+3 - c.name.length)).fill(' ').join('')
	const hsl = RGBtoHSL(c.rgb.r, c.rgb.g, c.rgb.b);
	const bg_text_color = hsl.l < .4 ? fg_white : fg_black;
	console.log(`${fg}fg_${c.name}${reset}${space}${bg}${bg_text_color}bg_${c.name}${reset}`)
 });
 
 console.log('\n\n');
 console.log('Additional ansi codes:');
 console.log(ansiSpecial.map(o=>`    cc_${o.name}`).join('\n'))
}


//-----------------------------------------------------------------------------------

function getColors(...argu){
	const args = [...argu];

  const fg_color = args.map(s => {
		return String(s).match(/^fg_/) !== null ? s : undefined;
	}).filter(s => {
		return !!s;
	})[0];

  const bg_color = args.map(s => {
		return String(s).match(/^bg_/) !== null ? s : undefined;
	}).filter(s => {
		return !!s;
	})[0];

	const fg_lookup = fg_color && fg_color.split('fg_')[1];
	const bg_lookup = bg_color && bg_color.split('bg_')[1];
	
	const fg_rgb = fg_lookup && allColors[fg_lookup];
	const bg_rgb = bg_lookup && allColors[bg_lookup];
	const fg = fg_rgb && getAdjustedColor({rgb:fg_rgb}).fg;
	const bg = bg_rgb && getAdjustedColor({rgb:bg_rgb}).bg;

	return (fg || '') + (bg || '');
}

//-----------------------------------------------------------------------------------

function setColors(...argu){
	const args = [...argu];
	const colors = getColors(...argu);

	const text = args.map(s => {
		return String(s).match(/^fg_/) === null && String(s).match(/^bg_/) === null ? s : ''
	}).filter(s => {
		return !!s;
	}).join(' ');

  return colors + text + `${reset}`;
}

function setRGBColors(r, g, b, bg){
	const c = getAdjustedColor({rgb:{r,g,b}})
	return bg ? c.bg : c.fg
}

function setHSLColors(h, s, l, bg){
	const rgb = HSLtoRGB(h, s, l);
	const c = getAdjustedColor({rgb:{...rgb}})
	return bg ? c.bg : c.fg
}

//-----------------------------------------------------------------------------------


const exports = {
	list,
	set: setColors,
	rgb: setRGBColors,
	rgbf: (r,g,b)=>setRGBColors(r,g,b,false),
	rgbb: (r,g,b)=>setRGBColors(r,g,b,true),
	hsl: setHSLColors,
	hslf: (h,s,l)=>setHSLColors(h,s,l,false),
	hslb: (h,s,l)=>setHSLColors(h,s,l,true),
	colors: {
		colorNamesBasic,
		moreColorNames,
		colorNames256,
		ansiSpecial
	},
	support: {isBasic, is256, is16m, support:isBasic?'isBasic':is256?'is256':is16m?'is16m':'unknown'},
	utils:{	
		HSLtoRGB,
		RGBtoHSL,
		deltaE
	},
	gradient,
	moveTo: (x = 0, y = 0) => {
	//	return `\x1B[<${y}>;<${x}>H`;
		return `\x1b[${y};${x}f`;
	},
	ansiEscapes,
	reset,
	clear,
	clearAll,
	fg_default,
	bg_default,
	_fg_default: fg_default,
	_bg_default: bg_default,

}

colorNamesBasic.concat(colorNames256, moreColorNames).forEach((o)=>{
	const c = getAdjustedColor({rgb:o.rgb, name: o.name});
	exports[`fg_${o.name}`] = c.fg;
	exports[`bg_${o.name}`] = c.bg;
	exports[`_fg_${o.name}`] = c.fg;
	exports[`_bg_${o.name}`] = c.bg;
 });

 ansiSpecial.forEach(o=>{
	exports[`${o.name}`] = o.ansi;
	exports[`cc_${o.name}`] = o.ansi;
 })

export default exports