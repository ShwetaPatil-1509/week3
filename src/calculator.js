/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

function calculator(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both inputs must be valid numbers');
  }

  let result;

  switch (operator) {
    case '+':
    case 'add':
    case 'addition':
      result = a + b;
      break;
    case '-':
    case 'subtract':
    case 'subtraction':
      result = a - b;
      break;
    case '*':
    case 'multiply':
    case 'multiplication':
      result = a * b;
      break;
    case '/':
    case 'divide':
    case 'division':
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      result = a / b;
      break;
    default:
      throw new Error(`Invalid operator '${operator}'. Use +, -, *, or /`);
  }

  return result;
}

module.exports = calculator;

// Handle CLI arguments
const args = process.argv.slice(2);

if (args.length === 3) {
  try {
    const [num1, operator, num2] = args;
    const result = calculator(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
} else if (args.length !== 0) {
  console.log('Calculator - Basic Arithmetic Operations');
  console.log('');
  console.log('Usage: node calculator.js <number1> <operator> <number2>');
  console.log('');
  console.log('Operators:');
  console.log('  +  Addition');
  console.log('  -  Subtraction');
  console.log('  *  Multiplication');
  console.log('  /  Division');
  console.log('');
  console.log('Examples:');
  console.log('  node calculator.js 10 + 5');
  console.log('  node calculator.js 20 - 8');
  console.log('  node calculator.js 4 * 3');
  console.log('  node calculator.js 15 / 3');
  process.exit(1);
}
