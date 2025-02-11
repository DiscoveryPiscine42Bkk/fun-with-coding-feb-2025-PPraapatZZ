$(document).ready(function() {
    function calculate() {
        let num1 = $("#num1").val();
        let num2 = $("#num2").val();
        let operator = $("#operator").val();

        if (num1 === "" || num2 === "" || num1 < 0 || num2 < 0) {
            alert("Error :(");
            return;
        }

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let result;

        if ((operator === "/" || operator === "%") && num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num1 / num2; break;
            case "%": result = num1 % num2; break;
        }

        alert("Result: " + result);
        console.log("Result: " + result);
    }

    $("#calculateBtn").click(calculate);

    setInterval(() => {
        alert("Please, use me...");
    }, 30000);
});
