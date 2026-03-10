const calculator = require('../calculator');

describe('Calculator - Basic Arithmetic Operations', () => {
  
  describe('Addition (+)', () => {
    test('should add 2 + 3 and return 5', () => {
      expect(calculator(2, '+', 3)).toBe(5);
    });

    test('should add 10 + 5 and return 15', () => {
      expect(calculator(10, '+', 5)).toBe(15);
    });

    test('should add negative numbers', () => {
      expect(calculator(-5, '+', -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator(10, '+', -3)).toBe(7);
    });

    test('should handle decimals', () => {
      expect(calculator(2.5, '+', 1.5)).toBe(4);
    });

    test('should add 0 to a number', () => {
      expect(calculator(5, '+', 0)).toBe(5);
    });

    test('should add using "add" operator alias', () => {
      expect(calculator(2, 'add', 3)).toBe(5);
    });

    test('should add using "addition" operator alias', () => {
      expect(calculator(2, 'addition', 3)).toBe(5);
    });
  });

  describe('Subtraction (-)', () => {
    test('should subtract 10 - 4 and return 6', () => {
      expect(calculator(10, '-', 4)).toBe(6);
    });

    test('should subtract and return negative result', () => {
      expect(calculator(5, '-', 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(calculator(-5, '-', -3)).toBe(-2);
    });

    test('should subtract positive and negative numbers', () => {
      expect(calculator(10, '-', -5)).toBe(15);
    });

    test('should handle decimals', () => {
      expect(calculator(5.5, '-', 2.5)).toBe(3);
    });

    test('should subtract 0 from a number', () => {
      expect(calculator(5, '-', 0)).toBe(5);
    });

    test('should subtract using "subtract" operator alias', () => {
      expect(calculator(10, 'subtract', 4)).toBe(6);
    });

    test('should subtract using "subtraction" operator alias', () => {
      expect(calculator(10, 'subtraction', 4)).toBe(6);
    });
  });

  describe('Multiplication (*)', () => {
    test('should multiply 45 * 2 and return 90', () => {
      expect(calculator(45, '*', 2)).toBe(90);
    });

    test('should multiply 4 * 3 and return 12', () => {
      expect(calculator(4, '*', 3)).toBe(12);
    });

    test('should multiply negative numbers', () => {
      expect(calculator(-5, '*', -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator(5, '*', -3)).toBe(-15);
    });

    test('should handle decimals', () => {
      expect(calculator(2.5, '*', 4)).toBe(10);
    });

    test('should multiply by 0', () => {
      expect(calculator(5, '*', 0)).toBe(0);
    });

    test('should multiply by 1', () => {
      expect(calculator(5, '*', 1)).toBe(5);
    });

    test('should multiply using "multiply" operator alias', () => {
      expect(calculator(4, 'multiply', 3)).toBe(12);
    });

    test('should multiply using "multiplication" operator alias', () => {
      expect(calculator(4, 'multiplication', 3)).toBe(12);
    });
  });

  describe('Division (/)', () => {
    test('should divide 20 / 5 and return 4', () => {
      expect(calculator(20, '/', 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(calculator(10, '/', 4)).toBe(2.5);
    });

    test('should divide negative numbers', () => {
      expect(calculator(-10, '/', -2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(calculator(10, '/', -2)).toBe(-5);
    });

    test('should divide decimals', () => {
      expect(calculator(5, '/', 2)).toBe(2.5);
    });

    test('should divide by 1', () => {
      expect(calculator(5, '/', 1)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator(20, '/', 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing decimal by zero', () => {
      expect(() => calculator(5.5, '/', 0)).toThrow('Cannot divide by zero');
    });

    test('should divide using "divide" operator alias', () => {
      expect(calculator(20, 'divide', 5)).toBe(4);
    });

    test('should divide using "division" operator alias', () => {
      expect(calculator(20, 'division', 5)).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('should handle large numbers', () => {
      expect(calculator(1000000, '+', 2000000)).toBe(3000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculator(0.1, '+', 0.2)).toBeCloseTo(0.3);
    });

    test('should throw error for invalid first operand', () => {
      expect(() => calculator('abc', '+', 5)).toThrow('Both inputs must be valid numbers');
    });

    test('should throw error for invalid second operand', () => {
      expect(() => calculator(5, '+', 'xyz')).toThrow('Both inputs must be valid numbers');
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculator(5, '^', 2)).toThrow("Invalid operator '^'. Use +, -, *, or /");
    });

    test('should handle string numbers as operands', () => {
      expect(calculator('5', '+', '3')).toBe(8);
    });

    test('should handle string numbers with decimals', () => {
      expect(calculator('2.5', '*', '4')).toBe(10);
    });

    test('should throw error for null operands', () => {
      expect(() => calculator(null, '+', 5)).toThrow('Both inputs must be valid numbers');
    });

    test('should throw error for undefined operands', () => {
      expect(() => calculator(undefined, '+', 5)).toThrow('Both inputs must be valid numbers');
    });
  });

  describe('Operations from Image Examples', () => {
    test('should correctly calculate 2 + 3 = 5', () => {
      expect(calculator(2, '+', 3)).toBe(5);
    });

    test('should correctly calculate 10 - 4 = 6', () => {
      expect(calculator(10, '-', 4)).toBe(6);
    });

    test('should correctly calculate 45 * 2 = 90', () => {
      expect(calculator(45, '*', 2)).toBe(90);
    });

    test('should correctly calculate 20 / 5 = 4', () => {
      expect(calculator(20, '/', 5)).toBe(4);
    });
  });
});
