class Account {

    #listOfTransactions = Array();

    #accountBalance = 0;

    getListOfTransactions() {
        return this.#listOfTransactions;
    }

    getAccountBalance() {
        return this.#accountBalance;
    }

    arrayCreator(transaction) {
        this.setAccountBalance(transaction);

        transaction.setTransactionBalance(this.#accountBalance);


        this.#listOfTransactions.push(transaction);
    }

    setAccountBalance(transaction) {
        if (transaction.getType() === 'type: credit') {
            this.#accountBalance += transaction.getAmount();
        }
        else { this.#accountBalance -= transaction.getAmount() }
    }
}
export default Account;

