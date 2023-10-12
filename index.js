const {
  colorNamesBasic,
  colorNames256,
  moreColorNames,
	ansiSpecial
} = require('./color-names.js');

const {	
	HSLtoRGB,
	RGBtoHSL,
	deltaE
} = require('./rgb.js')

//---------------------------------------------------------------

const {hasBasic, has256, has16m} =  require('./supports-color.js');

const isBasic = !has256 && !has16m;
const is256 = has256 && !has16m;
const is16m = has16m;

//---------------------------------------------------------------

module.exports = {
	list,
  set: setColors,
	rgb: setRGBColors,
	rgbf: (r,g,b)=>setRGBColors(r,g,b,false),
	rgbb: (r,g,b)=>setRGBColors(r,g,b,true),
	hsl: setHSLColors,
	hslf: (h,s,l)=>setRGBColors(h,s,l,false),
	hslb: (h,s,l)=>setRGBColors(h,s,l,true),
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
	gradient
}

//---------------------------------------------------------------

const reset = ansiSpecial.filter(o=>o.name==='reset')[0].ansi;
const fg_default = '\x1B[39m';
const bg_default = '\x1B[49m';

//---------------------------------------------------------------

function gradient(obj){
	const text_arr = obj.text.split('');
	const len = text_arr.length;
	var fg_rgb;
	var bg_rgb;
	if (obj.fg1 && obj.fg2){
		const fg_hsl1 = RGBtoHSL(obj.fg1.r, obj.fg1.g, obj.fg1.b);
		const fg_hsl2 = RGBtoHSL(obj.fg2.r, obj.fg2.g, obj.fg2.b);
		fg_rgb = [];
		for (let i=0;i < len;i++){
			const this_h = fg_hsl1.h + (((fg_hsl2.h - fg_hsl1.h) / len) * i);
			const this_s = fg_hsl1.s + (((fg_hsl2.s - fg_hsl1.s) / len) * i);
			const this_l = fg_hsl1.l + (((fg_hsl2.l - fg_hsl1.l) / len) * i);
			const this_rgb = HSLtoRGB(this_h, this_s, this_l);
			fg_rgb.push(this_rgb)
		}
	}
	if (obj.bg1 && obj.bg2){
		const bg_hsl1 = RGBtoHSL(obj.bg1.r, obj.bg1.g, obj.bg1.b);
		const bg_hsl2 = RGBtoHSL(obj.bg2.r, obj.bg2.g, obj.bg2.b);
		bg_rgb = [];
		for (let i=0;i < len;i++){
			const this_h = bg_hsl1.h + (((bg_hsl2.h - bg_hsl1.h) / len) * i);
			const this_s = bg_hsl1.s + (((bg_hsl2.s - bg_hsl1.s) / len) * i);
			const this_l = bg_hsl1.l + (((bg_hsl2.l - bg_hsl1.l) / len) * i);
			const this_rgb = HSLtoRGB(this_h, this_s, this_l);
			bg_rgb.push(this_rgb)
		}
	}

	return text_arr.map((char,i)=>{
		const fgc = fg_rgb ? getAdjustedColor({rgb:fg_rgb[i]}).fg : ''
		const bgc = bg_rgb ? getAdjustedColor({rgb:bg_rgb[i]}).bg : ''
		return `${fgc}${bgc}${char}`
	}).join('')+reset;

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
	module.exports[`fg_${o.name}`] = c.fg;
	module.exports[`bg_${o.name}`] = c.bg;
	module.exports[`_fg_${o.name}`] = c.fg;
	module.exports[`_bg_${o.name}`] = c.bg;
	return a
 },{});

 module.exports[`reset`] = reset;
 module.exports[`fg_default`] = fg_default;
 module.exports[`bg_default`] = bg_default;
 module.exports[`_fg_default`] = fg_default;
 module.exports[`_bg_default`] = bg_default;
 ansiSpecial.forEach(o=>{
	module.exports[`${o.name}`] = o.ansi;
	module.exports[`cc_${o.name}`] = o.ansi;
 })

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

if (!module.parent){
	list()
}