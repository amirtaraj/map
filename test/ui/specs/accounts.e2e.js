const AccountsPage = require('../pageobjects/accounts.page');
const TransactionsPage = require('../pageobjects/transactions.page');

describe('Accounts Page Load', () => {
    it('should load accounts page - show the avialable accounts', () => {
        AccountsPage.open();
        expect(AccountsPage.accountHeading).toHaveTextContaining(
            'Accounts'); 
        AccountsPage.getAccounts();     
    });
});


describe('Transactions Page Load', () => {
    it('should load transactions page - show the transactions for the account', () => {
        expect(TransactionsPage.transactionsHeading).toHaveTextContaining(
            'Transactions');       
    });
});

describe('Deposit Transaction', () => {
    it('should do a deposit Transaction - Add deposit', () => {
        TransactionsPage.makeDeposit('100');       
    });
});

describe('Withdraw Transaction', () => {
    it('should do a withdraw Transaction - Withdraw fund', () => {
        TransactionsPage.takeWithdrawal('50');       
    });
});


