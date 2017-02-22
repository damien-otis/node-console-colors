console-colors adds ANSI coloring to the nodejs console.log output.

Install:

npm install --save console-colors


Usage:


global.cc = require("console-colors");


console.log(cc.set("fg_red","Hello World in red"))

console.log(cc.set("fg_blue","Hello World in blue"))

console.log(cc.set("fg_green","bg_dark_grey","Hello World in fg_green and bg_dark_gray"))


This will list the colors and color codes to the console (shown as a gulp task):

gulp.task("listcolors",function(){
  cc.list()
})


![alt tag](http://dmtmix.com/imghit/getImage.asp?img=console_colors.png)
