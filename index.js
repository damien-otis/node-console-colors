const to_export = {
  list            : listColors,
  set             : setColors,
}

//--------------------------------------------------------------------------------------
//Only support colors and codes that are common to all platforms.

const isWin = /^win/.test(process.platform);
const isLinux = /^linux/.test(process.platform);

const console_colors = [
  {
    fg: 30,
    fg_formatting: 107,
		bg: 40,
    name: "black",
		list_bg: 'bg_white'
  },
  {
    fg: isLinux ? 30 : 90,
		list_fg: 'fg_black',
		bg: isLinux ? 47 : 100,
    name: "dark gray",
		set: isLinux ? 1 : 0
  },
  {
    fg: isLinux ? 30 : 37,
		bg: 47,
    name: "gray",
		list_fg: 'fg_black',
		set: isLinux ? 1 : 0
  },
  {
    fg: 97,
		bg: isLinux ? 47 : 107,
    name: "white",
		list_fg: 'fg_black'
  },
  {
    fg: 31,
		bg: 41,
    name: "dark red"
  },
  {
    fg: isLinux ? 31 : 91,
		bg: isLinux ? 41 : 101,
    name: "red",
		set: isLinux ? 1 : 0
  },
  {
    fg: 33,
		bg: 43,
    name: "dark yellow",
		list_fg: 'fg_black'
  },
  {
    fg: isLinux ? 33 : 93,
		bg: isLinux ? 43 : 103,
    name: "yellow",
		list_fg: 'fg_black',
		set: isLinux ? 1 : 0
  },
  {
    fg: 36,
		bg: 46,
    name: "dark cyan",
		list_fg: 'fg_black'
  },
  {
    fg: isLinux ? 36 : 96,
		bg: isLinux ? 46 : 106,
    name: "cyan",
		list_fg: 'fg_black',
		set: isLinux ? 1 : 0
  },
  {
    fg: 32,
		bg: 42,
    name: "dark green",
		list_fg: 'fg_black'
  },
  {
    fg: isLinux ? 32 : 92,
		bg: isLinux ? 42 : 102,
    name: "green",
		list_fg: 'fg_black',
		set: isLinux ? 1 : 0
  },
  {
    fg: 34,
		bg: 44,
    name: "dark blue"
  },
  {
    fg: isLinux ? 34 : 94,
		bg: isLinux ? 44 : 104,
    name: "blue",
		set: isLinux ? 1 : 0
  },
  {
    fg: 35,
		bg: 45,
    name: "dark purple"
  },
  {
    fg: isLinux ? 35 : 95,
		bg: isLinux ? 45 : 105,
    name: "purple",
		set: isLinux ? 1 : 0
  },
  {
    fg: 39,
		bg: 49,
    name: "default"
  },
  {
    fg: 0,
    name: "reset"
  }
];

to_export.console_colors = console_colors;

//-----------------------------------------
//generate global ANSI codes

for (var i=0;i<console_colors.length;i++){
	const cc = console_colors[i];
	const name = cc.name.replace(/\s/g,"_");
	if(!cc.bg || !cc.fg) {
		to_export[name] = cc.bg || cc.fg;
		continue;
	}
	if (cc.fg) {to_export[`fg_${name}`] = cc.fg}
	if (cc.bg) {to_export[`bg_${name}`] = cc.bg}
	if (cc.set) {to_export[`set_fg_${name}`] = cc.set}
}

//-----------------------------------------

function listColors(){
/*
List the color codes available to color console.log statements.
*/
  console.log("\n\n Console log color List:\n");

  var fg_lines = [];
  var bg_lines = [];

  var max_length = 0;
  for (var i=0;i<console_colors.length;i++){
    var cc = console_colors[i];

		if (!cc.fg || !cc.bg) {
			continue;
		}
    let fg_name = `fg_${cc.name.replace(/\s/g,"_")}`;
		let bg_name = `bg_${cc.name.replace(/\s/g,"_")}`;

		const fg_text = `Foreground ${cc.name}`;
		const bg_text = `Background ${cc.name}`;

		max_length = Math.max(max_length, fg_text.length, bg_text.length);

    fg_lines.push({
			name:fg_name,
			text: fg_text,
			colored: cc.list_bg ? setColors(cc.list_bg, fg_name, fg_text) : setColors(fg_name, fg_text)
		});

		bg_lines.push({
			name: bg_name,
			text: bg_text,
			colored: cc.list_fg ? setColors(cc.list_fg, bg_name, bg_text) : setColors(bg_name, bg_text)
		});
  }

  fg_lines.forEach(cc => {
    const tabs_len  = (max_length - Math.floor(cc.text.length));
    const tabs      = " ".repeat( tabs_len + 1 );
    console.log(`  ${cc.colored}${tabs}\u001b[0m: ${cc.name}`)
  });
	console.log('');
  bg_lines.forEach(cc => {
    const tabs_len  = (max_length - Math.floor(cc.text.length));
    const tabs      = " ".repeat( tabs_len + 1 );
    console.log(`  ${cc.colored}${tabs}\u001b[0m: ${cc.name}`)
  });
	console.log('');

}

//-----------------------------------------

function setColors(...argu){
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

	const text = args.map(s => {
		return String(s).match(/^fg_/) === null && String(s).match(/^bg_/) === null ? s : ''
	}).filter(s => {
		return !!s;
	}).join(' ');

	const set = to_export[`set_${fg_color}`] ? to_export[`set_${fg_color}`] : 0 ;

	const colors = `\u001b[${set ? set + ';' : ''}${fg_color ? to_export[fg_color] + (bg_color ? ';' : '') : ''}${bg_color ? to_export[bg_color]  : ''}m`

  return colors + text + `\u001b[${to_export.reset}m`;
}

//-----------------------------------------

if (process.argv.indexOf('--LISTCOLORS')!==-1) {
	listColors();
}

module.exports = to_export;
