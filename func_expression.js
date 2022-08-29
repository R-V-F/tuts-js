function ask(question,bilubilu,chuba){
    if(confirm(question)) bilubilu();
    else chuba();
}

function showOk() {
    console.log("OKOK");
}

function showNO() {
    console.log("SHIWWAWA")
}

ask("??", showOk, showNO);


function test() {
    console.log('cant touch this');
}

let t = test;

test; //nothing happens; it's just a ref
test(); //works
t(); //works