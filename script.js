function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operacion = document.getElementById("operacion").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;
    if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        resultado = num1 / num2;
    } else {
    }
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

