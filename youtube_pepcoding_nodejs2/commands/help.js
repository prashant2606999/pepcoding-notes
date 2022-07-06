function helpfn(dirPath){
    console.log(`
    lise of all command:
    node main.js tree "directoryPath"
    node main.js organize  "directoryPath"
    node main.js help
    `);
}

module.exports={
    helpkey: helpfn
}