const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TransactionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get transactionsHeading () { return $("//h1[contains(text(),'Transactions')]") }
    get makeDepositBtn () { return $("//button[contains(text(),'Make a deposit')]") }
    get makeWithdrawBtn () { return $("//button[contains(text(),'Withdraw funds')]") }
    get amoutBox () { return $("//input[1]") }
    get approve () { return $("//span[contains(text(),'Approve')]") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   
    makeDeposit(amount) {
        this.makeDepositBtn.click();
        this.amoutBox.setValue(amount);
        this.approve.click();
    }

    takeWithdrawal(amount) {
        this.makeWithdrawBtn.click();
        this.amoutBox.setValue(amount);
        this.approve.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
  
}

module.exports = new TransactionsPage();
