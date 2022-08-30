let obj = {
    spec1:5,
    spec2:"piep",
}

let clone = obj;

clone.spec1 = 10; // obj.spec1 == 10
                    //this copy is a ref

let clone2 = Object.assign({},obj);
clone2.spec = 100; // obj.spec1 == 10; different objs
