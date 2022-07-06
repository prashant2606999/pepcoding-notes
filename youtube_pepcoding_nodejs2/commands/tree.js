function treefn(dirPath){
    // let desPath;
    if(dirPath==undefined){
        // do nothing 
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

module.exports = {
    treekey: treefn
}