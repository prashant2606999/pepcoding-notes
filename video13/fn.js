console.log("line number 1", varName);
var varName =      10;
// fn b definition

console.log("line number 5", varName);
function fn() {
    console.log("line number 7", varName);
    var varName = 20;
    // from fn
    function b() {
        console.log("line number 5", varName);
    }
    b();
    console.log("line number 13",varName);
}
fn();