let star = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        star += "*"
    }
    if (i === 4) {
        break;
    }
    star += "\n"
}
console.log(star);