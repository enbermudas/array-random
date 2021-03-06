module.exports = ari = (array) => {
    if (array == null || !Array.isArray(array)) throw new TypeError('expected an array');
    if (array.length == 0) throw new Error('empty array given');
    if (array.length == 1) return array[0];

    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
};