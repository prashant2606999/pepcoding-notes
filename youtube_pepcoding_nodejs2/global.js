#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
// const { helpkey } = require("./commands/help");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let command = inputArr[0];
let types = {
    media:["mp4","mkv"],
    archives:['zip','7z','rar','tar','gz','ar','iso',"xz","js"],
    documents:['docx','doc','pdf','xls'],
    app:['exe','dmg','pkg','deb']
}

switch(command){
    case "tree" :
        treeObj.treekey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizekey(inputArr[1]);
        break;
    case "help":
        helpObj,helpkey();
        break;
    default:
        console.log("please input write command");
        break;            
}



