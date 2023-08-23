const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('calculate');
const resultH2 = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  const selectedOperation = operationSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultH2.textContent = 'Result: Invalid input';
    return;
  }

  let result = 0;

  switch (selectedOperation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        resultH2.textContent = 'Result: Division by zero';
        return;
      }
      break;
    case 'modulus':
      result = num1 % num2;
      break;
    case 'exponent':
      result = Math.pow(num1, num2);
      break;
    default:
      break;
  }

  resultH2.textContent = `Result: ${result}`;
});
