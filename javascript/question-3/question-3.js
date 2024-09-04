const randomInt = (val1,val2) => {
    return Math.floor(Math.random() * (val2 - val1 + 1) + val1)
}

console.log(randomInt(4,6))