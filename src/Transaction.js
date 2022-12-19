
class Transaction {

    #date
    #credit;
    #debit;
    #balance;
    #amount;

    constructor(credit = 0, debit = 0, balance = 0, date) {
        this.#credit = credit;
        this.#debit = debit;
        this.#balance = balance;
        this.#date = date;
    }

    setTransactionBalance(accountBalance) {
        this.#balance = accountBalance;
    }

    getCredit() {
        if (this.checkNegative()) {
            throw new Error("cannot deposit negative values.");
        }
        if (this.checkZeroCredit()) {
            return '       ';
        }
        return this.#credit.toFixed(2)
    }

    getBalance() {
        return this.#balance.toFixed(2)
    }


    getAmount() {
        if (this.getType() === 'type: credit') {
            return this.#amount = this.#credit;
        }
        return this.#amount = this.#debit;
    }

    checkNegative() {
        if (this.#credit < 0 || this.#debit < 0) {
            return true;
        }
        return false;
    }

    getDebit() {
        if (this.checkNegative()) {
            throw new Error("cannot withdraw negative values.");
        }
        if (this.checkZeroDebit()) {
            return '      ';
        }
        return this.#debit.toFixed(2)
    }

    getDate() {
        return new Date(this.#date).toLocaleDateString();
    }

    getType() {
        if (this.#credit > 0 && this.#debit === 0) {
            return 'type: credit';
        }
        else if (this.#debit > 0 && this.#credit === 0) {
            return 'type: debit';
        }
        else { throw new Error('cannot make a deposit and withdraw in the same transaction.'); }

    }

    checkZeroCredit() {
        if (this.#credit === 0) {
            return true;
        }
        return false;
    }

    checkZeroDebit() {
        if (this.#debit === 0) {
            return true;
        }
        return false;
    }
}




export default Transaction;