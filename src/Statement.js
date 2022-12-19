class Statement {

    static printHeader() {
        console.log('date' + '       ' + '||' + ' ' + 'credit' + '  ' + '||' + ' ' + 'debit' + '  ' + '||' + ' ' + 'balance')
    }

    static printStatement(array) {
        this.printHeader()
        for (let i = array.length - 1; i >= 0; i--) {
            console.log(array[i].getDate() + ' ||' + ' ' + array[i].getCredit() + ' ||' + ' ' + array[i].getDebit() + ' ||' + ' ' + array[i].getBalance());
        }
    }
}

export default Statement;
