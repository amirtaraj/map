const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get accountHeading () { return $("//h1[contains(text(),'Accounts')]") }
    get firstAccount () { return $("//a[contains(text(),'121212')]") }
    get transactionsHeading () { return $("//h1[contains(text(),'Transactions')]") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   
    getAccounts() {
        this.firstAccount.click();
    }
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    
}

module.exports = new AccountsPage();
