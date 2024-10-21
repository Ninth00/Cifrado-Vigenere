function cifrar(mensaje, clave) {
    if (mensaje === "" || clave === "") {
        throw new Error("Campos vacíos");
    }

    mensaje = mensaje.toUpperCase();
    clave = clave.toUpperCase();

    let resultado = "";
    let indiceClave = 0;

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];

        if (letra.match(/[A-Z]/)) {
            let letraCifrada = String.fromCharCode(
                ((letra.charCodeAt(0) - 65 + (clave[indiceClave % clave.length].charCodeAt(0) - 65)) % 26) + 65
            );
            resultado += letraCifrada;
            indiceClave++;
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function descifrar(mensaje, clave) {
    if (mensaje === "" || clave === "") {
        throw new Error("Campos vacíos");
    }

    mensaje = mensaje.toUpperCase();
    clave = clave.toUpperCase();

    let resultado = "";
    let indiceClave = 0;

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];

        if (letra.match(/[A-Z]/)) {
            let letraDescifrada = String.fromCharCode(
                ((letra.charCodeAt(0) - 65 - (clave[indiceClave % clave.length].charCodeAt(0) - 65) + 26) % 26) + 65
            );
            resultado += letraDescifrada;
            indiceClave++;
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

module.exports = { cifrar, descifrar };