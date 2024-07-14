const fibonacci = function(end) {
    end = +end
    if (end < 0) {return "OOPS"}

    let list = [0]
    for (let i = 0; i < end; i++) {
        i < 2 ? list.push(1) :
        list.push(list[list.length -1] + list[list.length - 2]);
    }
    return list[list.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
