import Statement from "../src/Statement.js";
import Transaction from "./Transaction.js";
import Account from "./Account.js";

const transaction1 = new Transaction(1000, 0, 0, 'Janurary 10, 2012');
const transaction2 = new Transaction(2000, 0, 0, 'Janurary 13, 2012');
const transaction3 = new Transaction(0, 500, 0, 'Janurary 14, 2012');

const account = new Account()

account.arrayCreator(transaction1);
account.arrayCreator(transaction2);
account.arrayCreator(transaction3);

Statement.printStatement(account.getListOfTransactions());
