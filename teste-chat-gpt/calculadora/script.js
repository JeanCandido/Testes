let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}
