
function doIt() {
    alert(this.name);
}

let obj = {
    name: "big benis",
}

obj.do = doIt;
obj.do();