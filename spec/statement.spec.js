import Statement from "../src/Statement.js";

describe('Statment Spec: UserStory 5:', () => {

    describe('Test 5d: Print header', () => {

        it('it should print the header as a string', () => {

            //arrange
            const spyOnPrintHeaderFn = spyOn(Statement, 'printHeader');

            //act
            Statement.printHeader();

            //assert;
            expect(spyOnPrintHeaderFn).toHaveBeenCalledTimes(1);
        });
    });
    describe('Test 5e: Print transaction statement', () => {

        class MockTransaction {
            getDebit() {

            }
            getBalance() {

            }
            getCredit() {

            }
            getDate() {

            }
        }
        it('it should transactions as a string', () => {

            //arrange
            const mockTransaction = new MockTransaction()
            let testArray = [mockTransaction];

            const spyOnPrintTransactionsFn = spyOn(Statement, 'printHeader');
            //act
            Statement.printStatement(testArray);

            //assert;
            expect(spyOnPrintTransactionsFn).toHaveBeenCalledTimes(1);
        });
    });
});