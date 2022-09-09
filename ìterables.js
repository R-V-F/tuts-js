console.log('odksakdosakodksaokdosa');

obj = {
  from: 1,
  to: 5
};

obj[Symbol.iterator] = function() {

  return {
    current: this.from,
    last: this.to,
    jonson: 'babyyy',
  
    next(){
      if(this.current <= this.last) {
        return {
          done: false,
          value: this.current++
        }
      }
      else {
        return {
          done: true
        }
      }

    }

  }
  
}
for(let i of obj) {
  console.log('dsadsadsa')
  console.log(i);
}

let iterator = obj[Symbol.iterator]();

//EXPLICIT LOOPING

while(true) {
  let res = iterator.next();
  if(res.done) break;
  else {
    console.log(res.value);
  }
}