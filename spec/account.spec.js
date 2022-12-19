import Account from "../src/Account.js";

class MockTransaction {
    balance;

    getAmount() {
        return 500;
    }
    setTransactionBalance(accountBalance) {
        this.balance = accountBalance;
    }
    getType() {
        return 'type: credit';
    }
}
describe('Account Spec: UserStory 4:', () => {
    let testAccount, mockTransaction1;

    beforeEach(() => {
        mockTransaction1 = new MockTransaction();
        testAccount = new Account();
    })

    afterEach(() => {
        mockTransaction1 = undefined;
        testAccount = undefined;
    })

    describe('Test 4a: setting the total balance', () => {

        it('it should return a 1000', () => {

            //arrange
            testAccount.setAccountBalance(mockTransaction1);
            testAccount.setAccountBalance(mockTransaction1);


            //act
            const actual = testAccount.getAccountBalance();

            //assert
            expect(actual).toBe(1000);
        });
    });

    describe('Test 4b: testing arrayCreator method', () => {

        it('array should contain mockTransaction', () => {
            //arrange
            testAccount.arrayCreator(mockTransaction1)

            //act
            const actual = testAccount.getListOfTransactions().includes(mockTransaction1);

            //assert
            expect(actual).toBe(true);
        });
    });

    describe('Test 4c: checking length of array is 1', () => {

        it('array should contain mockTransaction', () => {
            //arrange
            testAccount.arrayCreator(mockTransaction1)

            //act
            const actual = testAccount.getListOfTransactions().length;

            //assert
            expect(actual).toBe(1);
        });
    });
});

