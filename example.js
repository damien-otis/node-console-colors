const cc = require('./index');

cc.list();

console.log('\n\n')

const line = "--------------------------------------------------------------------";

console.log(cc.gradient({
	fg1:{r:0,g:128,b:0},
	fg2:{r:128,g:0,b:255},
	text: line
}));

console.log(cc.gradient({
	bg1:{r:255,g:128,b:0},
	bg2:{r:0,g:32,b:0}, 
	text: line
}));

console.log(cc.gradient({
	fg1:{r:0,g:128,b:0},
	fg2:{r:128,g:0,b:255},
	bg1:{r:255,g:128,b:0},
	bg2:{r:0,g:32,b:0}, 
	text: line
}));

console.log('\n\n')

console.log('cc.support =', cc.support);

console.log('\n\n')

console.log(cc.set('fg_red', 'Hello World'));

console.log(`${cc.fg_cyan}Hel${cc.bold}lo ${cc.dim}World${cc.reset}`);

console.log(`${cc.cc_bold}${cc.fg_cyan}${cc.strikethrough}Hel${cc.bold}lo ${cc.dim}World${cc.reset}`);

console.log(cc.set('fg_yellow','bg_blue', 'Hello', 'World'));

console.log(cc.set('bg_green', 'fg_purple', 'Hello', 'World'));

console.log(cc.set('fg_indianred', "Indian Red"))

const ErrorStyle = `${cc.fg_white}${cc.bg_red}${cc.overline}${cc.underline}`;
const errorMessage = "something broke"
console.log(`\n${ErrorStyle}ERROR:${cc.fg_white}${cc.bg_default} ${errorMessage}${cc.reset}\n`)

console.log(cc.set('bg_violet', 'fg_honeydew2', "BG Violet FG Honeydew2"))

console.log(`${cc.inverted}${cc.blink}${cc.underline}${cc.bg_violet}${cc.fg_honeydew2}BG Violet FG Honeydew2${cc.reset}`)

console.log('\n16m colors tests:');

console.log(`${cc.rgb(255,200,20,true)}${cc.rgb(0,0,255,false)}RGB COLORS 1${cc.set()}`)

console.log(`${cc.rgbb(255,200,20)}${cc.rgbf(0,0,255)}RGB COLORS 2${cc.reset}`)

console.log(`${cc.hsl(0.5,0.5,0.3)}${cc.hsl(0.2,0.7,0.5,true)}HSL COLORS${cc.set()}`)

console.log('\n\n')

console.log("RGB Red Gradient:")
const grad = [];
for (var i=0;i<255;i+=4){
	grad.push(`${cc.rgbf(255-i,0,0)}${cc.rgbb(i,0,0)}*`)
}
console.log(grad.join('')+cc.reset)

console.log('\n')
console.log("HSL Rainbow Gradient:")
let grad2 = [];
for (var i=0,h=0;i<63;i+=1,h+=1/64){
	grad2.push(`${cc.hslf(h,1,0.5)}${cc.hslb(1-h,1,0.5)}*`)
}
console.log(grad2.join(''), cc.reset)

console.log(cc.gradient({
	bg1:{r:255,g:0,b:0},
	bg2:{r:0,g:0,b:255}, 
	fg1:{r:128,g:0,b:25},
	fg2:{r:255,g:0,b:0}, 
	text: new Array(64).fill('*').join('')
}))