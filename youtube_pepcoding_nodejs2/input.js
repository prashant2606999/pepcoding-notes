let fs = require("fs");
let path = require("path");

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
        treefn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("please input write command");
        break;            
}


function organizeFn(dirPath){

    let desPath;
    if(dirPath==undefined){
        // do nothing 
        desPath = process.cwd(); // global change 3
        return;

    }else{
        let doesExit = fs.existsSync(dirPath);
        if(doesExit){
            desPath = path.join(dirPath,"organize_files");
            if(fs.existsSync(desPath)==false){
                fs.mkdirSync(desPath);
            }
        }else{
            console.log("kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath,desPath);
}

function organizeHelper(src,dest) { /*dikkat ye h basically ye  hme nam deta h na ki path hme path chaeye  */ 
    let childname = fs.readdirSync(src);
    // console.log(childname);
    for(let i = 0  ; i<childname.length; i++){
        let childAdress = path.join(src,childname[i]);
        let isFile = fs.lstatSync(childAdress).isFile();
        if(isFile){
            // console.log(childname[i]);
            let category =getCategory(childname[i]);
            console.log(childname[i],"belongs to --->",category);
            sendFiles(childAdress,dest,category);
        }

    }
}

 function sendFiles(srcFilePath,dest,category){
     let categoryPath = path.join(dest,category);
     if(fs.existsSync(categoryPath)==false){
         fs.mkdirSync(categoryPath);
     }
     let fileName = path.basename(srcFilePath);
     let destFilePath = path.join(categoryPath,fileName);
     fs.copyFileSync(srcFilePath,destFilePath);
     fs.unlinkSync(srcFilePath);
     console.log(fileName,"copied to ",category);
 }

function getCategory(name){
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
        let ctype = types[type];
        for(let i = 0 ; i<ctype.length ; i++){
            if(ext==ctype[i]){
                return type;                
            }
        }

    }
    return "others";

}

function helpfn(dirPath){
    console.log(`
    lise of all command:
    node main.js tree "directoryPath"
    node main.js organize  "directoryPath"
    node main.js help
    `);
}

function treefn(dirPath){
    // let desPath;
    if(dirPath==undefined){
        // console.log("kindly enter the path"); // global change 1
        // process.cwd();    global change 2
        treeHelper(process.cwd(),"");           

        return;
    }else{
        let doesExit = fs.existsSync(dirPath);
        if(doesExit){
            treeHelper(dirPath,"");           
        }else{
            console.log("kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├───" + fileName);
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);

        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
          }
    }
}