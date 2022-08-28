let value;
let age = prompt('age?',10);
let height = 200;
// if(age > 10) value = true;
// else value = false;

// -> using ? operator

value = (age > 10) ? true : false;

// Multiple
value = (age > 10) ? true :
    (height > 300) ? true :
    (height > 150) ? true : false;
    

console.log(value);

