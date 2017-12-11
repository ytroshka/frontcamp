module.exports = function (source) {
    let prop = typeof source === "string" ? JSON.parse(source) : source;
    for (let val in prop) {
        if (val.match(/\d+/)) {
            delete prop[val];
        }
    }
    return prop;
};