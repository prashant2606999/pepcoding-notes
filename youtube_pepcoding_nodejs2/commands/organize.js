function organizeFn(dirPath){

    let desPath;
    if(dirPath==undefined){
        // do nothing 
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

module.exports = {
    organizekey : organizeFn
}