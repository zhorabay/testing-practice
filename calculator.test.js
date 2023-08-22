const Calculator = require('./calculator');

describe('Calculator', () => {
    const calculator = new Calculator();
    describe('add method', () => {
      it('should add two positive numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      it('should add a positive and a negative number correctly', () => {
        expect(calculator.add(2, -3)).toBe(-1);
      });
  
      it('should add two negative numbers correctly', () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
    });
  
    describe('subtract method', () => {
      it('should subtract two positive numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      it('should subtract a positive and a negative number correctly', () => {
        expect(calculator.subtract(5, -3)).toBe(8);
      });
  
      it('should subtract two negative numbers correctly', () => {
        expect(calculator.subtract(-5, -3)).toBe(-2);
      });
    });

    describe('divide method', () => {
      it('should divide two positive numbers correctly', () => {
        expect(calculator.divide(6, 2)).toBe(3);
      });
  
      it('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed.');
      });
    });

    describe('multiply method', () => {
      it('should multiply two positive numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      it('should multiply a positive and a negative number correctly', () => {
        expect(calculator.multiply(2, -3)).toBe(-6);
      });
  
      it('should multiply two negative numbers correctly', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
    });
});
  