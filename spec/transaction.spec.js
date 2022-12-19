import Transaction from "../src/Transaction.js";

describe('Transaction Spec: UserStory 1:', () => {

    let testTransaction1;

    afterEach(() => {
        testTransaction1 = undefined;
    })

    describe('Test 1a: making a deposit', () => {


        it('should return a credit string', () => {
            //arrange
            testTransaction1 = new Transaction(1000);

            //act
            const actual = testTransaction1.getCredit();

            //assert
            expect(actual).toBe('1000.00');
        });
    });

    describe('Test 1b: checking for negative credit', () => {

        it('should return true', () => {
            //arrange
            testTransaction1 = new Transaction(-0.01, -1, 0, 'January 10, 2012');

            //act
            const actual = testTransaction1.checkNegative()
            //assert
            expect(actual).toBe(true)
        });
    });

    describe('Test 1c: error handling', () => {
        it('should return an error if a negative value is deposited', () => {

            //arrange
            testTransaction1 = new Transaction(-0.01);

            //assert
            expect(function () { testTransaction1.getCredit(); }).toThrow(new Error("cannot deposit negative values."));
        });
    });
});

describe('Transaction Spec: UserStory 2:', () => {

    let testTransaction1;

    afterEach(() => {
        testTransaction1 = undefined;
    })

    describe('Test 2a: withdrawing money', () => {
        it('should return debit string', () => {

            //arrange

            testTransaction1 = new Transaction(0, 500)
            //act
            const actual = testTransaction1.getDebit();

            //assert
            expect(actual).toBe('500.00');
        });
    });

    describe('Test 2b: checking for negative debit', () => {

        it('should return true', () => {
            //arrange
            testTransaction1 = new Transaction(0, -0.01);

            //act
            const actual = testTransaction1.checkNegative();

            //assert
            expect(actual).toBe(true);
        });
    });

    describe('Test 2c: error handling', () => {
        it('should return a new Error', () => {

            //arrange
            testTransaction1 = new Transaction(0, -0.01);


            //assert
            expect(function () { testTransaction1.getDebit(); }).toThrow(new Error("cannot withdraw negative values."));
        });
    });
});

describe('Transaction Spec: UserStory 3:', () => {

    let testTransaction1;

    afterEach(() => {
        testTransaction1 = undefined;
    })
    describe('Test 3a: tracking the date of a transaction', () => {
        it('should return the date as a string', () => {

            //arrange
            testTransaction1 = new Transaction(0, 0, 0, 'January 10, 2012');


            //act
            const actual = testTransaction1.getDate();

            //assert
            expect(actual).toBe('10/01/2012');
        });
    });

    describe('Test 3b: checking for credit transaction type', () => {
        it('should return type credit', () => {

            //arrange
            testTransaction1 = new Transaction(1, 0, 0, 'January 10, 2012');


            //act
            const actual = testTransaction1.getType();

            //assert
            expect(actual).toBe('type: credit');
        });
    });
    describe('Test 3c: checking for invalid transaction type', () => {
        it('should throw error', () => {

            //arrange
            testTransaction1 = new Transaction(1, 1, 0, 'January 10, 2012');

            //assert
            expect(function () { testTransaction1.getType(); }).toThrow(new Error('cannot make a deposit and withdraw in the same transaction.'));
        });
    });

    describe('Test 3d: checking for debit transaction type', () => {
        it('should return type credit', () => {

            //arrange
            testTransaction1 = new Transaction(0, 1, 0, 'January 10, 2012');


            //act
            const actual = testTransaction1.getType();

            //assert
            expect(actual).toBe('type: debit');
        });
    });


    describe('Test 3e: getting transaction amount', () => {
        it('should return 500', () => {

            //arrange
            testTransaction1 = new Transaction(500, 0, 0, 'January 10, 2012');


            //act
            const actual = testTransaction1.getAmount();

            //assert
            expect(actual).toBe(500);
        });
    });
});

describe('Transaction Spec: UserStory 5:', () => {

    let testTransaction1;
    beforeEach(() => {
        testTransaction1 = new Transaction(0, 0, 0, 'January 10, 2012');
    })

    afterEach(() => {
        testTransaction1 = undefined;
    })
    describe('Test 5a: checking if credit or debit = 0', () => {
        it('should return true', () => {

            //act
            const actual = testTransaction1.checkZeroCredit();

            //assert
            expect(actual).toBe(true);
        });

        it('should return true', () => {

            //act
            const actual = testTransaction1.checkZeroDebit();

            //assert
            expect(actual).toBe(true);
        });
    });
    describe('Test 5c: calling getCredit()/getDebit(), when credit/debit = 0', () => {
        it('should return an empty string', () => {

            //act
            const actual = testTransaction1.getCredit();

            //assert
            expect(actual).toBe('       ');
        });
        it('should return an empty string', () => {

            //act
            const actual = testTransaction1.getDebit();

            //assert
            expect(actual).toBe('      ');
        });
    });
});


