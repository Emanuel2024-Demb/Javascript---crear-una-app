function analizarNumero() {

    let entrada = document.getElementById("numero").value;
    let num = Number(entrada);
    let signo;
    let tipo;

    if (entrada === "" || !Number.isInteger(num)) {
        document.getElementById("resultado").textContent =
            "Ingresa un número entero válido.";
        return;
    }

    if (num > 0) {
        signo = "positivo";
    } else if (num < 0) {
        signo = "negativo";
    } else {
        signo = "cero";
    }

    if (num % 2 === 0) {
        tipo = "par";
    } else {
        tipo = "impar";
    }

    document.getElementById("resultado").textContent =
        "El número es " + signo + " y " + tipo + ".";
}