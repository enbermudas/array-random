const assert = require('assert');
const arrayRandom = require('./');

describe('arrayRandom', function() {
    it('Debería arrojar un error si no se entrega un arreglo.', function() {
        assert.throws(() => arrayRandom(), /expected an array/);
        assert.throws(() => arrayRandom('a'), /expected an array/);
        assert.throws(() => arrayRandom(1), /expected an array/);
        assert.throws(() => arrayRandom({}), /expected an array/);
    });

    it('Debería arrojar un error si se entrega un arreglo vacío.', function() {
        assert.throws(() => arrayRandom([]), /empty array given/);
    });

    it('Debería retornar el primer elemento de un arreglo cuyo tamaño es igual a 1.', function() {
        assert(arrayRandom([1]), 1);
        assert(arrayRandom(['a']), 'a');
        assert(arrayRandom([{}]), {});
    });
});