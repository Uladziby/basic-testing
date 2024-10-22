// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const rawInput = {
      a: 4,
      b: 3,
      action: Action.Add,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBe(7);
  });

  test('should subtract two numbers', () => {
    const rawInput = {
      a: 4,
      b: 3,
      action: Action.Subtract,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const rawInput = {
      a: 4,
      b: 3,
      action: Action.Multiply,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBe(12);
  });

  test('should divide two numbers', () => {
    const rawInput = {
      a: 4,
      b: 2,
      action: Action.Divide,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const rawInput = {
      a: 4,
      b: 2,
      action: Action.Exponentiate,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBe(16);
  });

  test('should return null for invalid action', () => {
    const rawInput = {
      a: 4,
      b: 2,
      action: 'invalid' as Action,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const rawInput = {
      a: 4,
      b: 'invalid' as any,
      action: Action.Add,
    };

    const result = simpleCalculator(rawInput);

    expect(result).toBeNull();
  });
});
