import cc from './index.js';

function clearScreen(exit){
	console.log(cc.reset)
	console.log(cc.clearAll);
	process.exit();
};

process.on('exit', clearScreen);
process.on('SIGINT', clearScreen);
process.on('SIGUSR1', clearScreen);
process.on('SIGUSR2', clearScreen);
process.on('uncaughtException', clearScreen);

//---------------------------------------------------------------------

console.log(cc.clearAll);

var q1 = 0;
var q2 = 0;
var q3 = 0;

setInterval(()=>{

	let x = 1;
	let y = 2;
	const width = process.stdout.columns - 2;
	const height = process.stdout.rows - 11;
	
	const lines = [];
	
	q1 += 0.05;
	for (var iy = y;iy<y+height;iy++){
		const line = [];
		q2 = Math.sin(q1+(iy/height))
		for(var ix=x;ix<x+width;ix++){
			q2 += Math.sin(q3+=0.00002) * 0.006
			line.push(cc.hslb(Math.round((Math.sin(q2)+1)*180),100,50)+' ')
		}
		lines.push(line.join(''))
	}
	console.log(cc.moveTo(x,y)+lines.join('\n'))
	console.log(cc.reset+'\nctrl-c to exit')

}, 33)