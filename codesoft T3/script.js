let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    const result = eval(currentInput);
    if (Number.isFinite(result)) {
        display.value = result;
    } else {
        display.value = 'Error';
    }
}
function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
