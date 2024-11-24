let expression = "";

function press(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        expression = eval(expression);
        document.getElementById("display").value = expression;
    } catch (e) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}
