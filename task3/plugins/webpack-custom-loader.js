module.exports = function (source) {
    console.log(source);
    console.log(typeof source === "string");
    console.log(JSON.parse(source));
    let prop = typeof source === "string" ? JSON.parse(source) : source;
    for (let val in prop) {
        if (val.match(/\d+/)) {
            delete prop[val];
        }
    }
    return prop;
};