const assert = require('assert');
const ari = require('./');

describe('ArrayRandomItem', function() {
    it('Debería arrojar un error si no se entrega un arreglo.', function() {
        assert.throws(() => ari(), /expected an array/);
        assert.throws(() => ari('a'), /expected an array/);
        assert.throws(() => ari(1), /expected an array/);
        assert.throws(() => ari({}), /expected an array/);
    });

    it('Debería arrojar un error si se entrega un arreglo vacío.', function() {
        assert.throws(() => ari([]), /empty array given/);
    });

    it('Debería retornar el primer elemento de un arreglo cuyo tamaño es igual a 1.', function() {
        assert(ari([1]), 1);
        assert(ari(['a']), 'a');
        assert(ari([{}]), {});
    });
});