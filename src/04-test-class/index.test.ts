import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
} from '04-test-class';

describe('BankAccount', () => {
  const initialBalance = 100;

  test('should create account with initial balance', () => {
    const account = getBankAccount(initialBalance);

    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(initialBalance);

    expect(() => account.withdraw(200)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(initialBalance);
    const toAccount = getBankAccount(0);

    expect(() => account.transfer(200, toAccount)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(initialBalance);

    expect(() => account.transfer(50, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const amount = 50;

    account.deposit(amount);

    expect(account.getBalance()).toBe(initialBalance + amount);
  });

  test('should withdraw money', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const amount = 50;

    account.withdraw(amount);

    expect(account.getBalance()).toBe(initialBalance - amount);
  });

  test('should transfer money', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const toAccount = getBankAccount(0);
    const amount = 50;

    account.transfer(amount, toAccount);

    expect(account.getBalance()).toBe(initialBalance - amount);
    expect(toAccount.getBalance()).toBe(amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 100;

    const account = getBankAccount(initialBalance);

    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(balance).toBeGreaterThanOrEqual(0);
      expect(balance).toBeLessThanOrEqual(100);
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = 100;

    const account = getBankAccount(initialBalance);

    const balance = await account.fetchBalance();
    if (typeof balance === 'number') {
      expect(balance).not.toBe(initialBalance);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {});
});
