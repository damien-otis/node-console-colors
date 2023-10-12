node-console-colors adds ANSI coloring to the nodejs console.log output.

Install:

npm install --save node-console-colors
yarn add node-console-colors

Usage:


const cc = require("node-console-colors");

console.log(cc.set("fg_red", "Hello World in red"))

console.log(cc.set("fg_blue", "Hello World in blue"))

console.log(cc.set("fg_green", "bg_dark_grey", "Hello World", "in fg_green and bg_dark_gray"))

To list all the colors:

    node ./node_modules/node-console-colors/index.js


![alt tag](https://dmtmix.com/dnetAPI/getImage/console_colors.png)
