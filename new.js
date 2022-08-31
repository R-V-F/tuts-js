function User(name) {
    this.name = name;
    this.online = false;
}

let user1 = new User("bliblon");

console.log(user1.name);