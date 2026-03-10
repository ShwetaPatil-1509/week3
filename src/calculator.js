/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Power (^)
 * - Square Root (sqrt)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

function modulo(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Both inputs must be valid numbers');
  }

  if (numB === 0) {
    throw new Error('Cannot calculate modulo with zero');
  }

  return numA % numB;
}

function power(base, exponent) {
  const baseNum = parseFloat(base);
  const expNum = parseFloat(exponent);

  if (isNaN(baseNum) || isNaN(expNum)) {
    throw new Error('Both inputs must be valid numbers');
  }

  return Math.pow(baseNum, expNum);
}

function squareRoot(n) {
  const num = parseFloat(n);

  if (isNaN(num)) {
    throw new Error('Input must be a valid number');
  }

  if (num < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }

  return Math.sqrt(num);
}

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
    case '%':
    case 'modulo':
      if (b === 0) {
        throw new Error('Cannot calculate modulo with zero');
      }
      result = a % b;
      break;
    case '^':
    case 'power':
      result = Math.pow(a, b);
      break;
    default:
      throw new Error(`Invalid operator '${operator}'. Use +, -, *, /, %, or ^`);
  }

  return result;
}

module.exports = calculator;
module.exports.modulo = modulo;
module.exports.power = power;
module.exports.squareRoot = squareRoot;

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
  console.log('  +     Addition');
  console.log('  -     Subtraction');
  console.log('  *     Multiplication');
  console.log('  /     Division');
  console.log('  %     Modulo');
  console.log('  ^     Power');
  console.log('');
  console.log('Examples:');
  console.log('  node calculator.js 10 + 5');
  console.log('  node calculator.js 20 - 8');
  console.log('  node calculator.js 4 * 3');
  console.log('  node calculator.js 15 / 3');
  console.log('  node calculator.js 17 % 5');
  console.log('  node calculator.js 2 ^ 8');
  process.exit(1);
}
