var to_export = {
  list : listColors,
  set  : setColors
}

//--------------------------------------------------------------------------------------
//Only support colors and codes that are common to all platforms.
var isWin = /^win/.test(process.platform);
console.log("isWin",isWin)

var console_colors = [
  {
    code: "\033[90;21m",
    formatting: "\033[107m",
    type: "fg",
    name: "black"
  },
  {
    code: "\033[30m",
    type: "fg",
    name: "gray"
  },
  {
    code: "\033[31;21m",
    type: "fg",
    name: "dark red"
  },
  {
    code: "\033[91m",
    type: "fg",
    name: "red"
  },
  {
    code: "\033[33m",
    type: "fg",
    name: "dark yellow"
  },
  {
    code: "\033[93m",
    type: "fg",
    name: "yellow"
  },
  {
    code: "\033[96m",
    type: "fg",
    name: "dark cyan"
  },
  {
    code: "\033[36m",
    type: "fg",
    name: "cyan"
  },
  {
    code: "\033[32m",
    type: "fg",
    name: "dark green"
  },
  {
    code:"\033[92m",
    type: "fg",
    name: "green"
  },
  {
    code: "\033[34m",
    type: "fg",
    name: "dark blue"
  },
  {
    code: "\033[94m",
    type: "fg",
    name: "blue"
  },
  {
    code: "\033[35m",
    type: "fg",
    name: "dark purple"
  },
  {
    code: "\033[95m",
    type: "fg",
    name: "purple"
  },
  {
    code: "\033[37m",
    type: "fg",
    name: "gray"
  },
  {
    code: "\033[97m",
    formatting: "\033[40m",
    type: "fg",
    name: "white"
  },
  {
    code: "\033[39m",
    type: "fg",
    name: "default"
  },


  {
    code: "\033[40m",
    type: "bg",
    name: "black",
    formatting: "\033[37m"
  },
  {
    code: "\033[41m",
    type: "bg",
    name: "dark red",
    formatting:"\033[37m"
  },
  {
    code: "\033[101m",
    type: "bg",
    name: "red",
  },
  {
    code: "\033[43m",
    type: "bg",
    name: "dark yellow"
  },
  {
    code: "\033[103m",
    type: "bg",
    name: "yellow",
    formatting: "\033[30m"
  },
  {
    code: "\033[42m",
    type: "bg",
    name: "dark green"
  },
  {
    code: "\033[102m",
    type: "bg",
    name: "green",
    formatting: "\033[30m"
  },
  {
    code: "\033[44m",
    type: "bg",
    name: "dark blue",
    formatting: "\033[37m"
  },
  {
    code: "\033[104m",
    type: "bg",
    name: "blue",
    formatting: "\033[37m"
  },
  {
    code: "\033[45m",
    type: "bg",
    name: "dark purple"
  },
  {
    code: "\033[105m",
    type: "bg",
    name: "purple"
  },
  {
    code: "\033[46m",
    type: "bg",
    name: "dark cyan"
  },
  {
    code: "\033[106m",
    type: "bg",
    name: "cyan",
    formatting: "\033[30m"
  },
  {
    code: "\033[100m",
    type: "bg",
    name: "dark gray"
  },
  {
    code: "\033[47m",
    formatting: "\033[30m",
    type: "bg",
    name: "gray",
    formatting: "\033[30m"
  },
  {
    code: "\033[107m",
    type: "bg",
    name: "white",
    formatting: "\033[30m"
  },

  {
    code: "\033[49m",
    type: "bg",
    name: "default"
  },
  {
    code: "\033[22m",
    type: "fg",
    name: "unbold"
  },
  {
  //  name: "reset\033[0m              : cc_reset",
    code: "\033[0m",
    name: "reset"
  }


/* OSX Only

  {
    name: "blink\033[0m             : cc_blink",
    code:  "\033[5m",
    name: "cc_blink"
  },
*/
/* OSX Only

  {
    //name: "bold\033[0m               : cc_bold",
    code:  "\033[1m",
    name: "bold"
  },
*/
/* OSX Only
  {
    name: "underscore\033[0m        : cc_underscore",
    code:  "\033[4m",
    name: "cc_underscore"
  },
*/
/* OSX Only

  {
    //name: "clear line         : cc_clearline",
    code: "\033[2K",
    name: "clearline",
    norender:true
  },

  {
//    name: "clear display      : cc_cleardisplay",
    code: "\033[2J",
    name: "cleardisplay",
    norender:true
  }
*/

];

//-----------------------------------------
//generate global ANSI codes

  for (var i=0;i<console_colors.length;i++){
    var cc = console_colors[i];
    var this_code = (cc.type ? cc.type+"_" : "") + cc.name.replace(/\s/g,"_");
    to_export[this_code] = cc.code
  }


//-----------------------------------------
function listColors(){
/*
List the color codes available to color console.log statements.
*/
  console.log("\n\n Console log color List:\n\n")

  var lines = []
  var max_length = 0;
  for (var i=0;i<console_colors.length;i++){
    var cc = console_colors[i];
    cc.codename = "cc_" + (cc.type ? cc.type+"_" : "") + (cc.name.replace(/\s/g,"_"));
    cc.c_text = (cc.type === "fg" ? "foreground " : cc.type === "bg" ? "background " : "") + (cc.name.replace(/\s/g,"_"));
    if (cc.c_text.length > max_length){max_length = cc.c_text.length}
  }

  for (var i=0;i<console_colors.length;i++){
    var cc = console_colors[i];

    var tabs_len  = (max_length - Math.floor(cc.c_text.length));
    var tabs      = " ".repeat( tabs_len+1 );

    console.log("  ", (cc.norender ? "" : cc.code) + (cc.formatting ? cc.formatting : "") + cc.c_text + to_export.reset + tabs + ": "+cc.codename)
  }




  console.log(to_export.reset)

}

function setColors(){
  var colors = []
  for (var i=0;i<arguments.length-1;i++){
    colors.push(to_export[arguments[i]])
  }
  return colors.join("") + arguments[arguments.length-1] + to_export.reset
}

module.exports = to_export;
