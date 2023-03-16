const name = ["Sofia", "David", "Juan"];
console.log(name);

name.push("Sara", "Augustin");
console.log(name);

name.shift();
console.log(name);

name.splice(name.indexOf("David") + 1, 0, "Reneta");
console.log(name);