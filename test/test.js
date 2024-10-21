var { cifrar, descifrar } = require('../script');
var assert = require('assert');

describe('Pruebas de Cifrado y Descifrado Vigenère', function() {
    describe('Cifrar', function() {
        it('Debería cifrar el mensaje correctamente', function() {
            let mensaje = "HOLA";
            let clave = "KEY";
            let resultado = cifrar(mensaje, clave);
            let esperado = "RSJK";
            assert.equal(resultado, esperado);
        });

        it('Debería manejar espacios y caracteres no alfabéticos', function() {
            let mensaje = "HOLA MUNDO";
            let clave = "KEY";
            let resultado = cifrar(mensaje, clave);
            let esperado = "RSJK QSXHM";
            assert.equal(resultado, esperado);
        });

        it('Debería lanzar un error si hay campos vacíos', function() {
            assert.throws(() => { cifrar("", "KEY"); }, /Campos vacíos/);
        });
    });

    describe('Descifrar', function() {
        it('Debería descifrar el mensaje correctamente', function() {
            let mensaje = "RSJK";
            let clave = "KEY";
            let resultado = descifrar(mensaje, clave);
            let esperado = "HOLA";
            assert.equal(resultado, esperado);
        });

        it('Debería manejar espacios y caracteres no alfabéticos al descifrar', function() {
            let mensaje = "RSJK QSXHM";
            let clave = "KEY";
            let resultado = descifrar(mensaje, clave);
            let esperado = "HOLA MUNDO";
            assert.equal(resultado, esperado);
        });

        it('Debería lanzar un error si hay campos vacíos al descifrar', function() {
            assert.throws(() => { descifrar("", "KEY"); }, /Campos vacíos/);
        });
    });
});
