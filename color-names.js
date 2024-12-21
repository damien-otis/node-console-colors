export const ansiSpecial = [
  { 
    name: "reset",
    ansi: "\u001b[0m",
    about: "Resets all styles to default console colors and style"
  },
  {
    name: "clear",
    ansi: "\u001b[2J",
    about: "Clear Screen"
  },
  {
    name:"bold",
    ansi: '\u001b[1m'
  },
  {
    name:"dim",
    ansi: '\u001b[2m'
  },
  {
    name:"underline",
    ansi: '\u001b[4m'
  },
  {
    name:"strikethrough",
    ansi: '\u001b[9m'
  },
  {
    name:"overline",
    ansi: '\u001b[53m'
  },
  {
    name:"blink",
    ansi: '\u001b[5m'
  },
  {
    name:"inverted",
    ansi: '\u001b[7m'
  },
  {
    name:"hidden",
    ansi: '\u001b[8m'
  },
  {
    name:"fg_default",
    ansi: '\x1B[39m'
  },
  {
    name:"bg_default",
    ansi: '\x1B[49m'
  },
  
]

//first 16 colors in 16 color mode and 256 color mode
export const colorNamesBasic = [
  {
    fg: 30,
		bg: 40,
    name: "black",
		list_bg: 'bg_white',
    rgb: {r:0, g: 0, b: 0}
  },
  {
    name: "dark_gray",
    fg: 90,
		bg: 100,
		set: true,
    rgb: {r:118, g: 118, b: 118}
  },
  {
    name: "gray",
    fg: 37,
		bg: 47,
		set: true,
    rgb: {r:204, g: 204, b: 204}
  },
  {
    name: "white",
    fg: 97,
		bg: 107,
    rgb: {r:255, g: 255, b: 255}
  },
  {
    name: "dark_red",
    fg: 31,
		bg: 41,
    rgb: {r:197, g: 15, b: 31}
  },
  {
    name: "red",
    fg: 91,
		bg: 101,
		set: true,
    rgb: {r:231, g: 72, b: 86}
  },
  {
    name: "dark_yellow",
    fg: 33,
		bg: 43,
    rgb: {r:193, g: 144, b: 0}
  },
  {
    name: "yellow",
    fg: 93,
		bg: 103,
		set: true,
    rgb: {r:249, g: 241, b: 165}
  },
  {
    name: "dark_cyan",
    fg: 36,
		bg: 46,
    rgb: {r:58, g: 150, b: 221}
  },
  {
    name: "cyan",
    fg: 96,
		bg: 106,
		set: true,
    rgb: {r:97, g: 214, b: 214}
  },
  {
    name: "dark_green",
    fg: 32,
		bg: 42,
    rgb: {r:19, g: 122, b: 14}
  },
  {
    name: "green",
    fg: 92,
		bg: 102,
		set: true,
    rgb: {r:32, g: 222, b: 22}
  },
  {
    name: "dark_blue",
    fg: 34,
		bg: 44,
    rgb: {r:22, g: 32, b: 122}
  },
  {
    name: "blue",
    fg: 94,
		bg: 104,
		set: true,
    rgb: {r:59, g: 100, b: 255}
  },
  {
    name: "dark_purple",
    fg: 35,
		bg: 45,
		set: true,
    rgb: {r:136, g: 23, b: 152}
  },
  {
    name: "purple",
    fg: 95,
		bg: 105,
		set: true,
    rgb: {r:180, g: 0, b: 158}
  }
]


//Color Names 256 color terms
//https://www.ditig.com/256-colors-cheat-sheet
//https://talyian.github.io/ansicolors/

export const colorNames256 = [
  ...colorNamesBasic,

  {"name": "navyblue", rgb:{r:0,g:0,b:95}, "system": true},
  {"name": "darkblue0", rgb:{r:0,g:0,b:135}, "system": true},
  {"name": "blue3", rgb:{r:0,g:0,b:175}, "system": true},
  {"name": "blue3", rgb:{r:0,g:0,b:215}, "system": true},
  {"name": "blue1", rgb:{r:0,g:0,b:255}, "system": true},
  {"name": "darkgreen", rgb:{r:0,g:95,b:0}},
  {"name": "deepskyblue4", rgb:{r:0,g:95,b:95}},
  {"name": "deepskyblue4", rgb:{r:0,g:95,b:135}},
  {"name": "deepskyblue4", rgb:{r:0,g:95,b:175}},
  {"name": "dodgerblue3", rgb:{r:0,g:95,b:215}},
  {"name": "dodgerblue2", rgb:{r:0,g:95,b:255}},
  {"name": "green4", rgb:{r:0,g:135,b:0}},
  {"name": "springgreen4", rgb:{r:0,g:135,b:95}},
  {"name": "turquoise4", rgb:{r:0,g:135,b:135}},
  {"name": "deepskyblue3", rgb:{r:0,g:135,b:175}},
  {"name": "deepskyblue3", rgb:{r:0,g:135,b:215}},
  {"name": "dodgerblue1", rgb:{r:0,g:135,b:255}},
  {"name": "green3", rgb:{r:0,g:175,b:0}},
  {"name": "springgreen3", rgb:{r:0,g:175,b:95}},
  {"name": "darkcyan", rgb:{r:0,g:175,b:135}},
  {"name": "lightseagreen", rgb:{r:0,g:175,b:175}},
  {"name": "deepskyblue2", rgb:{r:0,g:175,b:215}},
  {"name": "deepskyblue1", rgb:{r:0,g:175,b:255}},
  {"name": "green3", rgb:{r:0,g:215,b:0}},
  {"name": "springgreen3", rgb:{r:0,g:215,b:95}},
  {"name": "springgreen2", rgb:{r:0,g:215,b:135}},
  {"name": "cyan3", rgb:{r:0,g:215,b:175}},
  {"name": "darkturquoise", rgb:{r:0,g:215,b:215}},
  {"name": "turquoise2", rgb:{r:0,g:215,b:255}},
  {"name": "green1", rgb:{r:0,g:255,b:0}},
  {"name": "springgreen2", rgb:{r:0,g:255,b:95}},
  {"name": "springgreen1", rgb:{r:0,g:255,b:135}},
  {"name": "mediumspringgreen", rgb:{r:0,g:255,b:175}},
  {"name": "cyan2", rgb:{r:0,g:255,b:215}},
  {"name": "cyan1", rgb:{r:0,g:255,b:255}},
  {"name": "darkred", rgb:{r:95,g:0,b:0}},
  {"name": "deeppink4", rgb:{r:95,g:0,b:95}},
  {"name": "purple4", rgb:{r:95,g:0,b:135}},
  {"name": "purple4", rgb:{r:95,g:0,b:175}},
  {"name": "purple3", rgb:{r:95,g:0,b:215}},
  {"name": "blueviolet", rgb:{r:95,g:0,b:255}},
  {"name": "orange4", rgb:{r:95,g:95,b:0}},
  {"name": "grey37", rgb:{r:95,g:95,b:95}},
  {"name": "mediumpurple4", rgb:{r:95,g:95,b:135}},
  {"name": "slateblue3", rgb:{r:95,g:95,b:175}},
  {"name": "slateblue3", rgb:{r:95,g:95,b:215}},
  {"name": "royalblue1", rgb:{r:95,g:95,b:255}},
  {"name": "chartreuse4", rgb:{r:95,g:135,b:0}},
  {"name": "darkseagreen4", rgb:{r:95,g:135,b:95}},
  {"name": "paleturquoise4", rgb:{r:95,g:135,b:135}},
  {"name": "steelblue", rgb:{r:95,g:135,b:175}},
  {"name": "steelblue3", rgb:{r:95,g:135,b:215}},
  {"name": "cornflowerblue", rgb:{r:95,g:135,b:255}},
  {"name": "chartreuse3", rgb:{r:95,g:175,b:0}},
  {"name": "darkseagreen4", rgb:{r:95,g:175,b:95}},
  {"name": "cadetblue", rgb:{r:95,g:175,b:135}},
  {"name": "cadetblue", rgb:{r:95,g:175,b:175}},
  {"name": "skyblue3", rgb:{r:95,g:175,b:215}},
  {"name": "steelblue1", rgb:{r:95,g:175,b:255}},
  {"name": "chartreuse3", rgb:{r:95,g:215,b:0}},
  {"name": "palegreen3", rgb:{r:95,g:215,b:95}},
  {"name": "seagreen3", rgb:{r:95,g:215,b:135}},
  {"name": "aquamarine3", rgb:{r:95,g:215,b:175}},
  {"name": "mediumturquoise", rgb:{r:95,g:215,b:215}},
  {"name": "steelblue1", rgb:{r:95,g:215,b:255}},
  {"name": "chartreuse2", rgb:{r:95,g:255,b:0}},
  {"name": "seagreen2", rgb:{r:95,g:255,b:95}},
  {"name": "seagreen1", rgb:{r:95,g:255,b:135}},
  {"name": "seagreen1", rgb:{r:95,g:255,b:175}},
  {"name": "aquamarine1", rgb:{r:95,g:255,b:215}},
  {"name": "darkslategray2", rgb:{r:95,g:255,b:255}},
  {"name": "darkred", rgb:{r:135,g:0,b:0}},
  {"name": "deeppink4", rgb:{r:135,g:0,b:95}},
  {"name": "darkmagenta", rgb:{r:135,g:0,b:135}},
  {"name": "darkmagenta", rgb:{r:135,g:0,b:175}},
  {"name": "darkviolet", rgb:{r:135,g:0,b:215}},
  {"name": "purple", rgb:{r:135,g:0,b:255}},
  {"name": "orange4", rgb:{r:135,g:95,b:0}},
  {"name": "lightpink4", rgb:{r:135,g:95,b:95}},
  {"name": "plum4", rgb:{r:135,g:95,b:135}},
  {"name": "mediumpurple3", rgb:{r:135,g:95,b:175}},
  {"name": "mediumpurple3", rgb:{r:135,g:95,b:215}},
  {"name": "slateblue1", rgb:{r:135,g:95,b:255}},
  {"name": "yellow4", rgb:{r:135,g:135,b:0}},
  {"name": "wheat4", rgb:{r:135,g:135,b:95}},
  {"name": "grey53", rgb:{r:135,g:135,b:135}},
  {"name": "lightslategrey", rgb:{r:135,g:135,b:175}},
  {"name": "mediumpurple", rgb:{r:135,g:135,b:215}},
  {"name": "lightslateblue", rgb:{r:135,g:135,b:255}},
  {"name": "yellow4", rgb:{r:135,g:175,b:0}},
  {"name": "darkolivegreen3", rgb:{r:135,g:175,b:95}},
  {"name": "darkseagreen", rgb:{r:135,g:175,b:135}},
  {"name": "lightskyblue3", rgb:{r:135,g:175,b:175}},
  {"name": "lightskyblue3", rgb:{r:135,g:175,b:215}},
  {"name": "skyblue2", rgb:{r:135,g:175,b:255}},
  {"name": "chartreuse2", rgb:{r:135,g:215,b:0}},
  {"name": "darkolivegreen3", rgb:{r:135,g:215,b:95}},
  {"name": "palegreen3", rgb:{r:135,g:215,b:135}},
  {"name": "darkseagreen3", rgb:{r:135,g:215,b:175}},
  {"name": "darkslategray3", rgb:{r:135,g:215,b:215}},
  {"name": "skyblue1", rgb:{r:135,g:215,b:255}},
  {"name": "chartreuse1", rgb:{r:135,g:255,b:0}},
  {"name": "lightgreen", rgb:{r:135,g:255,b:95}},
  {"name": "lightgreen", rgb:{r:135,g:255,b:135}},
  {"name": "palegreen1", rgb:{r:135,g:255,b:175}},
  {"name": "aquamarine1", rgb:{r:135,g:255,b:215}},
  {"name": "darkslategray1", rgb:{r:135,g:255,b:255}},
  {"name": "red3", rgb:{r:175,g:0,b:0}},
  {"name": "deeppink4", rgb:{r:175,g:0,b:95}},
  {"name": "mediumvioletred", rgb:{r:175,g:0,b:135}},
  {"name": "magenta3", rgb:{r:175,g:0,b:175}},
  {"name": "darkviolet", rgb:{r:175,g:0,b:215}},
  {"name": "purple", rgb:{r:175,g:0,b:255}},
  {"name": "darkorange3", rgb:{r:175,g:95,b:0}},
  {"name": "indianred", rgb:{r:175,g:95,b:95}},
  {"name": "hotpink3", rgb:{r:175,g:95,b:135}},
  {"name": "mediumorchid3", rgb:{r:175,g:95,b:175}},
  {"name": "mediumorchid", rgb:{r:175,g:95,b:215}},
  {"name": "mediumpurple2", rgb:{r:175,g:95,b:255}},
  {"name": "darkgoldenrod", rgb:{r:175,g:135,b:0}},
  {"name": "lightsalmon3", rgb:{r:175,g:135,b:95}},
  {"name": "rosybrown", rgb:{r:175,g:135,b:135}},
  {"name": "grey63", rgb:{r:175,g:135,b:175}},
  {"name": "mediumpurple2", rgb:{r:175,g:135,b:215}},
  {"name": "mediumpurple1", rgb:{r:175,g:135,b:255}},
  {"name": "gold3", rgb:{r:175,g:175,b:0}},
  {"name": "darkkhaki", rgb:{r:175,g:175,b:95}},
  {"name": "navajowhite3", rgb:{r:175,g:175,b:135}},
  {"name": "grey69", rgb:{r:175,g:175,b:175}},
  {"name": "lightsteelblue3", rgb:{r:175,g:175,b:215}},
  {"name": "lightsteelblue", rgb:{r:175,g:175,b:255}},
  {"name": "yellow3", rgb:{r:175,g:215,b:0}},
  {"name": "darkolivegreen3", rgb:{r:175,g:215,b:95}},
  {"name": "darkseagreen3", rgb:{r:175,g:215,b:135}},
  {"name": "darkseagreen2", rgb:{r:175,g:215,b:175}},
  {"name": "lightcyan3", rgb:{r:175,g:215,b:215}},
  {"name": "lightskyblue1", rgb:{r:175,g:215,b:255}},
  {"name": "greenyellow", rgb:{r:175,g:255,b:0}},
  {"name": "darkolivegreen2", rgb:{r:175,g:255,b:95}},
  {"name": "palegreen1", rgb:{r:175,g:255,b:135}},
  {"name": "darkseagreen2", rgb:{r:175,g:255,b:175}},
  {"name": "darkseagreen1", rgb:{r:175,g:255,b:215}},
  {"name": "paleturquoise1", rgb:{r:175,g:255,b:255}},
  {"name": "red3", rgb:{r:215,g:0,b:0}},
  {"name": "deeppink3", rgb:{r:215,g:0,b:95}},
  {"name": "deeppink3", rgb:{r:215,g:0,b:135}},
  {"name": "magenta3", rgb:{r:215,g:0,b:175}},
  {"name": "magenta3", rgb:{r:215,g:0,b:215}},
  {"name": "magenta2", rgb:{r:215,g:0,b:255}},
  {"name": "darkorange3", rgb:{r:215,g:95,b:0}},
  {"name": "indianred", rgb:{r:215,g:95,b:95}},
  {"name": "hotpink3", rgb:{r:215,g:95,b:135}},
  {"name": "hotpink2", rgb:{r:215,g:95,b:175}},
  {"name": "orchid", rgb:{r:215,g:95,b:215}},
  {"name": "mediumorchid1", rgb:{r:215,g:95,b:255}},
  {"name": "orange3", rgb:{r:215,g:135,b:0}},
  {"name": "lightsalmon3", rgb:{r:215,g:135,b:95}},
  {"name": "lightpink3", rgb:{r:215,g:135,b:135}},
  {"name": "pink3", rgb:{r:215,g:135,b:175}},
  {"name": "plum3", rgb:{r:215,g:135,b:215}},
  {"name": "violet", rgb:{r:215,g:135,b:255}},
  {"name": "gold3", rgb:{r:215,g:175,b:0}},
  {"name": "lightgoldenrod3", rgb:{r:215,g:175,b:95}},
  {"name": "tan", rgb:{r:215,g:175,b:135}},
  {"name": "mistyrose3", rgb:{r:215,g:175,b:175}},
  {"name": "thistle3", rgb:{r:215,g:175,b:215}},
  {"name": "plum2", rgb:{r:215,g:175,b:255}},
  {"name": "yellow3", rgb:{r:215,g:215,b:0}},
  {"name": "khaki3", rgb:{r:215,g:215,b:95}},
  {"name": "lightgoldenrod2", rgb:{r:215,g:215,b:135}},
  {"name": "lightyellow3", rgb:{r:215,g:215,b:175}},
  {"name": "grey84", rgb:{r:215,g:215,b:215}},
  {"name": "lightsteelblue1", rgb:{r:215,g:215,b:255}},
  {"name": "yellow2", rgb:{r:215,g:255,b:0}},
  {"name": "darkolivegreen1", rgb:{r:215,g:255,b:95}},
  {"name": "darkolivegreen1", rgb:{r:215,g:255,b:135}},
  {"name": "darkseagreen1", rgb:{r:215,g:255,b:175}},
  {"name": "honeydew2", rgb:{r:215,g:255,b:215}},
  {"name": "lightcyan1", rgb:{r:215,g:255,b:255}},
  {"name": "red1", rgb:{r:255,g:0,b:0}},
  {"name": "deeppink2", rgb:{r:255,g:0,b:95}},
  {"name": "deeppink1", rgb:{r:255,g:0,b:135}},
  {"name": "deeppink1", rgb:{r:255,g:0,b:175}},
  {"name": "magenta2", rgb:{r:255,g:0,b:215}},
  {"name": "magenta1", rgb:{r:255,g:0,b:255}},
  {"name": "orangered1", rgb:{r:255,g:95,b:0}},
  {"name": "indianred1", rgb:{r:255,g:95,b:95}},
  {"name": "indianred1", rgb:{r:255,g:95,b:135}},
  {"name": "hotpink", rgb:{r:255,g:95,b:175}},
  {"name": "hotpink", rgb:{r:255,g:95,b:215}},
  {"name": "mediumorchid1", rgb:{r:255,g:95,b:255}},
  {"name": "darkorange", rgb:{r:255,g:135,b:0}},
  {"name": "salmon1", rgb:{r:255,g:135,b:95}},
  {"name": "lightcoral", rgb:{r:255,g:135,b:135}},
  {"name": "palevioletred1", rgb:{r:255,g:135,b:175}},
  {"name": "orchid2", rgb:{r:255,g:135,b:215}},
  {"name": "orchid1", rgb:{r:255,g:135,b:255}},
  {"name": "orange1", rgb:{r:255,g:175,b:0}},
  {"name": "sandybrown", rgb:{r:255,g:175,b:95}},
  {"name": "lightsalmon1", rgb:{r:255,g:175,b:135}},
  {"name": "lightpink1", rgb:{r:255,g:175,b:175}},
  {"name": "pink1", rgb:{r:255,g:175,b:215}},
  {"name": "plum1", rgb:{r:255,g:175,b:255}},
  {"name": "gold1", rgb:{r:255,g:215,b:0}},
  {"name": "lightgoldenrod2", rgb:{r:255,g:215,b:95}},
  {"name": "lightgoldenrod2", rgb:{r:255,g:215,b:135}},
  {"name": "navajowhite1", rgb:{r:255,g:215,b:175}},
  {"name": "mistyrose1", rgb:{r:255,g:215,b:215}},
  {"name": "thistle1", rgb:{r:255,g:215,b:255}},
  {"name": "yellow1", rgb:{r:255,g:255,b:0}},
  {"name": "lightgoldenrod1", rgb:{r:255,g:255,b:95}},
  {"name": "khaki1", rgb:{r:255,g:255,b:135}},
  {"name": "wheat1", rgb:{r:255,g:255,b:175}},
  {"name": "cornsilk1", rgb:{r:255,g:255,b:215}},
  {"name": "grey100", rgb:{r:255,g:255,b:255}},
  {"name": "grey3", rgb:{r:8,g:8,b:8}},
  {"name": "grey7", rgb:{r:18,g:18,b:18}},
  {"name": "grey11", rgb:{r:28,g:28,b:28}},
  {"name": "grey15", rgb:{r:38,g:38,b:38}},
  {"name": "grey19", rgb:{r:48,g:48,b:48}},
  {"name": "grey23", rgb:{r:58,g:58,b:58}},
  {"name": "grey27", rgb:{r:68,g:68,b:68}},
  {"name": "grey30", rgb:{r:78,g:78,b:78}},
  {"name": "grey35", rgb:{r:88,g:88,b:88}},
  {"name": "grey39", rgb:{r:98,g:98,b:98}},
  {"name": "grey42", rgb:{r:108,g:108,b:108}},
  {"name": "grey46", rgb:{r:118,g:118,b:118}},
  {"name": "grey50", rgb:{r:128,g:128,b:128}},
  {"name": "grey54", rgb:{r:138,g:138,b:138}},
  {"name": "grey58", rgb:{r:148,g:148,b:148}},
  {"name": "grey62", rgb:{r:158,g:158,b:158}},
  {"name": "grey66", rgb:{r:168,g:168,b:168}},
  {"name": "grey70", rgb:{r:178,g:178,b:178}},
  {"name": "grey74", rgb:{r:188,g:188,b:188}},
  {"name": "grey78", rgb:{r:198,g:198,b:198}},
  {"name": "grey82", rgb:{r:208,g:208,b:208}},
  {"name": "grey85", rgb:{r:218,g:218,b:218}},
  {"name": "grey89", rgb:{r:228,g:228,b:228}},
  {"name": "grey93", rgb:{r:238,g:238,b:238}}
];

//-----------------------------------------------------------------

export const moreColorNames = [
  //red html color names
  {"name": "indianred", rgb:{r:205, g:92, b:92}},
  {"name": "lightcoral", rgb:{r:240, g:128, b:128}},
  {"name": "salmon", rgb:{r:250, g:128, b:114}},
  {"name": "darksalmon", rgb:{r:233, g:150, b:122}},
  {"name": "lightsalmon", rgb:{r:255, g:160, b:122}},
  {"name": "crimson", rgb:{r:220, g:20, b:60}},
  {"name": "red", rgb:{r:255, g:0, b:0}},
  {"name": "firebrick", rgb:{r:178, g:34, b:34}},
  {"name": "darkred", rgb:{r:139, g:0, b:0}},
  
  //pink html color name
  {"name": "pink", rgb:{r:255, g:192, b:203}},
  {"name": "lightpink", rgb:{r:255, g:182, b:193}},
  {"name": "hotpink", rgb:{r:255, g:105, b:180}},
  {"name": "deeppink", rgb:{r:255, g:20, b:147}},
  {"name": "mediumvioletred", rgb:{r:199, g:21, b:133}},
  {"name": "palevioletred", rgb:{r:219, g:112, b:147}},
  
  //orange html color name
  {"name": "lightsalmon", rgb:{r:255, g:160, b:122}},
  {"name": "coral", rgb:{r:255, g:127, b:80}},
  {"name": "tomato", rgb:{r:255, g:99, b:71}},
  {"name": "orangered", rgb:{r:255, g:69, b:0}},
  {"name": "darkorange", rgb:{r:255, g:140, b:0}},
  {"name": "orange", rgb:{r:255, g:165, b:0}},
  
  //yellow html color names
  {"name": "gold", rgb:{r:255, g:215, b:0}},
  {"name": "yellow", rgb:{r:255, g:255, b:0}},
  {"name": "lightyellow", rgb:{r:255, g:255, b:224}},
  {"name": "lemonchiffon", rgb:{r:255, g:250, b:205}},
  {"name": "lightgoldenrodyellow", rgb:{r:250, g:250, b:210}},
  {"name": "papayawhip", rgb:{r:255, g:239, b:213}},
  {"name": "moccasin", rgb:{r:255, g:228, b:181}},
  {"name": "peachpuff", rgb:{r:255, g:218, b:185}},
  {"name": "palegoldenrod", rgb:{r:238, g:232, b:170}},
  {"name": "khaki", rgb:{r:240, g:230, b:140}},
  {"name": "darkkhaki", rgb:{r:189, g:183, b:107}},
  
  //purple html color names
  {"name": "lavender", rgb:{r:230, g:230, b:250}},
  {"name": "thistle", rgb:{r:216, g:191, b:216}},
  {"name": "plum", rgb:{r:221, g:160, b:221}},
  {"name": "violet", rgb:{r:238, g:130, b:238}},
  {"name": "orchid", rgb:{r:218, g:112, b:214}},
  {"name": "fuchsia", rgb:{r:255, g:0, b:255}},
  {"name": "magenta", rgb:{r:255, g:0, b:255}},
  {"name": "mediumorchid", rgb:{r:186, g:85, b:211}},
  {"name": "mediumpurple", rgb:{r:147, g:112, b:219}},
  {"name": "rebeccapurple", rgb:{r:102, g:51, b:153}},
  {"name": "blueviolet", rgb:{r:138, g:43, b:226}},
  {"name": "darkviolet", rgb:{r:148, g:0, b:211}},
  {"name": "darkorchid", rgb:{r:153, g:50, b:204}},
  {"name": "darkmagenta", rgb:{r:139, g:0, b:139}},
  {"name": "purple", rgb:{r:128, g:0, b:128}},
  {"name": "indigo", rgb:{r:75, g:0, b:130}},
  {"name": "slateblue", rgb:{r:106, g:90, b:205}},
  {"name": "darkslateblue", rgb:{r:72, g:61, b:139}},
  {"name": "mediumslateblue", rgb:{r:123, g:104, b:238}},
  
  //green html color names
  {"name": "greenyellow", rgb:{r:173, g:255, b:47}},
  {"name": "chartreuse", rgb:{r:127, g:255, b:0}},
  {"name": "lawngreen", rgb:{r:124, g:252, b:0}},
  {"name": "lime", rgb:{r:0, g:255, b:0}},
  {"name": "limegreen", rgb:{r:50, g:205, b:50}},
  {"name": "palegreen", rgb:{r:152, g:251, b:152}},
  {"name": "lightgreen", rgb:{r:144, g:238, b:144}},
  {"name": "mediumspringgreen", rgb:{r:0, g:250, b:154}},
  {"name": "springgreen", rgb:{r:0, g:255, b:127}},
  {"name": "mediumseagreen", rgb:{r:60, g:179, b:113}},
  {"name": "seagreen", rgb:{r:46, g:139, b:87}},
  {"name": "forestgreen", rgb:{r:34, g:139, b:34}},
  {"name": "green", rgb:{r:0, g:128, b:0}},
  {"name": "darkgreen", rgb:{r:0, g:100, b:0}},
  {"name": "yellowgreen", rgb:{r:154, g:205, b:50}},
  {"name": "olivedrab", rgb:{r:107, g:142, b:35}},
  {"name": "olive", rgb:{r:128, g:128, b:0}},
  {"name": "darkolivegreen", rgb:{r:85, g:107, b:47}},
  {"name": "mediumaquamarine", rgb:{r:102, g:205, b:170}},
  {"name": "darkseagreen", rgb:{r:143, g:188, b:139}},
  {"name": "lightseagreen", rgb:{r:32, g:178, b:170}},
  {"name": "darkcyan", rgb:{r:0, g:139, b:139}},
  {"name": "teal", rgb:{r:0, g:128, b:128}},
  
  //blue html color names
  {"name": "aqua", rgb:{r:0, g:255, b:255}},
  {"name": "cyan", rgb:{r:0, g:255, b:255}},
  {"name": "lightcyan", rgb:{r:224, g:255, b:255}},
  {"name": "paleturquoise", rgb:{r:175, g:238, b:238}},
  {"name": "aquamarine", rgb:{r:127, g:255, b:212}},
  {"name": "turquoise", rgb:{r:64, g:224, b:208}},
  {"name": "mediumturquoise", rgb:{r:72, g:209, b:204}},
  {"name": "darkturquoise", rgb:{r:0, g:206, b:209}},
  {"name": "cadetblue", rgb:{r:95, g:158, b:160}},
  {"name": "steelblue", rgb:{r:70, g:130, b:180}},
  {"name": "lightsteelblue", rgb:{r:176, g:196, b:222}},
  {"name": "powderblue", rgb:{r:176, g:224, b:230}},
  {"name": "lightblue", rgb:{r:173, g:216, b:230}},
  {"name": "skyblue", rgb:{r:135, g:206, b:235}},
  {"name": "lightskyblue", rgb:{r:135, g:206, b:250}},
  {"name": "deepskyblue", rgb:{r:0, g:191, b:255}},
  {"name": "dodgerblue", rgb:{r:30, g:144, b:255}},
  {"name": "cornflowerblue", rgb:{r:100, g:149, b:237}},
  {"name": "mediumslateblue", rgb:{r:123, g:104, b:238}},
  {"name": "royalblue", rgb:{r:65, g:105, b:225}},
  {"name": "blue", rgb:{r:0, g:0, b:255}},
  {"name": "mediumblue", rgb:{r:0, g:0, b:205}},
  {"name": "darkblue", rgb:{r:0, g:0, b:139}},
  {"name": "navy", rgb:{r:0, g:0, b:128}},
  {"name": "midnightblue", rgb:{r:25, g:25, b:112}},
  
  //brown html color names
  {"name": "cornsilk", rgb:{r:255, g:248, b:220}},
  {"name": "blanchedalmond", rgb:{r:255, g:235, b:205}},
  {"name": "bisque", rgb:{r:255, g:228, b:196}},
  {"name": "navajowhite", rgb:{r:255, g:222, b:173}},
  {"name": "wheat", rgb:{r:245, g:222, b:179}},
  {"name": "burlywood", rgb:{r:222, g:184, b:135}},
  {"name": "tan", rgb:{r:210, g:180, b:140}},
  {"name": "rosybrown", rgb:{r:188, g:143, b:143}},
  {"name": "sandybrown", rgb:{r:244, g:164, b:96}},
  {"name": "goldenrod", rgb:{r:218, g:165, b:32}},
  {"name": "darkgoldenrod", rgb:{r:184, g:134, b:11}},
  {"name": "peru", rgb:{r:205, g:133, b:63}},
  {"name": "chocolate", rgb:{r:210, g:105, b:30}},
  {"name": "saddlebrown", rgb:{r:139, g:69, b:19}},
  {"name": "sienna", rgb:{r:160, g:82, b:45}},
  {"name": "brown", rgb:{r:165, g:42, b:42}},
  {"name": "maroon", rgb:{r:128, g:0, b:0}},
  
  //white html color names
  {"name": "white", rgb:{r:255, g:255, b:255}},
  {"name": "snow", rgb:{r:255, g:250, b:250}},
  {"name": "honeydew", rgb:{r:240, g:255, b:240}},
  {"name": "mintcream", rgb:{r:245, g:255, b:250}},
  {"name": "azure", rgb:{r:240, g:255, b:255}},
  {"name": "aliceblue", rgb:{r:240, g:248, b:255}},
  {"name": "ghostwhite", rgb:{r:248, g:248, b:255}},
  {"name": "whitesmoke", rgb:{r:245, g:245, b:245}},
  {"name": "seashell", rgb:{r:255, g:245, b:238}},
  {"name": "beige", rgb:{r:245, g:245, b:220}},
  {"name": "oldlace", rgb:{r:253, g:245, b:230}},
  {"name": "floralwhite", rgb:{r:255, g:250, b:240}},
  {"name": "ivory", rgb:{r:255, g:255, b:240}},
  {"name": "antiquewhite", rgb:{r:250, g:235, b:215}},
  {"name": "linen", rgb:{r:250, g:240, b:230}},
  {"name": "lavenderblush", rgb:{r:255, g:240, b:245}},
  {"name": "mistyrose", rgb:{r:255, g:228, b:225}},
  
  //gray html color names
  {"name": "gainsboro", rgb:{r:220, g:220, b:220}},
  {"name": "lightgray", rgb:{r:211, g:211, b:211}},
  {"name": "silver", rgb:{r:192, g:192, b:192}},
  {"name": "darkgray", rgb:{r:169, g:169, b:169}},
  {"name": "gray", rgb:{r:128, g:128, b:128}},
  {"name": "grey", rgb:{r:128, g:128, b:128}},
  {"name": "dimgray", rgb:{r:105, g:105, b:105}},
  {"name": "lightslategray", rgb:{r:119, g:136, b:153}},
  {"name": "slategray", rgb:{r:112, g:128, b:144}},
  {"name": "darkslategray", rgb:{r:47, g:79, b:79}}
];

