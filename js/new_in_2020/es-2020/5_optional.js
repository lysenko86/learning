/*
	source: https://youtu.be/7TpAN4FISeI?t=3309
*/

console.log('START');



const bill1 = {
	bank: {
		name: 'My Bank',
		amount: {
			value: 1000,
			currency: 'RUB'
		}
	}
};

const bill2 = {
	bank: {}
};

function getBillValueFrom(bill) {
	//return bill.bank.amount.value;  // помилка буде value of undefined

	// старе рішення
	//return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value) ? bill.bank.amount.value : undefined;

	return bill?.bank?.amount?.value;
}

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));
