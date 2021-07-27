const foo = () => {
    console.log("This is from Utils.JS");
}

function add(a,b) {
    return a + b;
}

module.exports = foo;
module.exports = add;