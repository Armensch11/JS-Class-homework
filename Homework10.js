// Ex. 1

class Author {
	constructor(name, surname, email, gender) {
		(this.name = name), (this.surname = surname), (this.email = email), (this.title = gender);
	}
	get fullname() {
		return this.surname + ' ' + this.name;
	}
	set fullname(value) {
		[ this.name, this.surname ] = value.split(' ');
	}

	set title(gender) {
		gender === 'male' ? (this._title = 'Mr') : (this._title = 'Mrs');
	}
	get title() {
		return this._title;
	}
	toString() {
		if (this.name && this.email) {
			console.log(`${this.name}'s contact details are ${this.email}'`);
		} else {
			console.log('sorry there are no details for this person');
		}
	}
}
class Book {
	constructor(title, price, author, quantity) {
		(this.title = title), (this.price = price), (this.quantity = quantity), (this._author = author);
	}
	set author(author) {
		if (author instanceof Author) {
			this._author = author;
		} else {
			console.log("we don't recognise that author");
		}
	}
	get author() {
		return this._author;
	}
	getProfit() {
		return this.quantity * this.price;
	}
	toString() {
		if (this.author) {
			let str = 'the Author of this book is ' + this.author.title + '. ' + this.author.fullname;
			return str;
		} else {
			return 'this book was written in ancient times and the author name is lost';
		}
	}
}

//Ex.2
class StudentOld {
	constructor(id, name, balance = 0) {
		(this._id = id), (this.name = name), (this.balance = balance);
	}
	get balance() {
		return this._balance;
	}
	set balance(usd) {
		if (usd && typeof usd === 'number' && usd >= 0) {
			this._balance = usd;
		} else {
			this._balance = 0;
		}
	}
	get id() {
		return this._id;
	}
	credit(amount) {
		if (amount > 0) {
			this.balance = +this.balance + amount;
		}
		return this.balance;
	}
	debit(amount) {
		if (amount <= this.balance) {
			return (this.balance -= amount);
		} else {
			return 'debit amount exceeds the available funds ';
		}
	}
	transferTo(account, amount) {
		if (+this.debit(amount)) {
			account.credit(amount);
		} else {
			return 'not enough funds';
		}
	}
	static identify(account1, account2) {
		if (account1.id === account2.id && account1.name === account2.name && account1.balance === account2.balance) {
			return 'accounts are the same';
		} else {
			return 'different accounts';
		}
	}
	toString() {
		let str = 'Student ' + this.name + ' has ' + this.balance + ' usd on his account';
		return str;
	}
}

//Ex.3
class Person {
	constructor(firstName, lastName, gender, dob) {
		(this.firstName = firstName),
			(this.lastName = lastName),
			(this.gender = gender),
			(this.title = gender),
			(this.dob = dob),
			(this.age = dob);
	}
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
	set fullName(val) {
		[ this.firstName, this.lastName ] = val.split(' ');
	}
	get title() {
		return this._title;
	}
	set title(val = 'human') {
		if (val.toLowerCase() === 'male') {
			this._title = 'Mr';
		}
		if (val.toLowerCase() === 'female') {
			this._title = 'Mrs';
		}
	}
	get age() {
		return this._age;
	}
	set age(dob) {
		let date = new Date();
		this._age = date.getFullYear() - dob;
	}
	toString() {
		return this.fullName + ' is ' + this.age + ' years old';
	}
}

class Student extends Person {
	constructor(programm, year, fee, firstName, lastName, gender, dob) {
		super(firstName, lastName, gender, dob);
		(this.programm = programm), (this.year = year), (this.fee = fee);
	}
	get studies() {
		return this._studies;
	}
	set studies(programm) {
		let prog = new Map();
		for (let i = 0; i < programm.length; i++) {
			prog.set(programm[i], 0);
		}
		this._studies = prog;
	}
	passExam(prog, grade) {
		this.studies.set(prog, grade);
		let examPassed = 0;
		for (let val of this.studies.values()) {
			if (val >= 50) {
				examPassed++;
			}
			if (this.studies.size === examPassed) {
				this.year++;
			}
		}
	}
	toString() {
		let examPassed = 0;
		if (this.studies) {
			for (let val of this.studies.values()) {
				if (val >= 50) {
					examPassed++;
				}
				if (this.studies.size === examPassed) {
					return this.fullName + ' successfully graduated ' + `${this.year}-1` + ' year studies';
				} else {
					return this.fullName + ' is a bad student';
				}
			}
		}
	}
}
class Teacher extends Person {
	constructor(program, pay) {
		super(), (this.program = program), (this.pay = pay);
	}
	toString() {
		return (
			'the teacher of ' + this.program + ': ' + this.fullName + ' receives monthly salary of ' + this.pay + ' usd'
		);
	}
}
// const objOri = {
// 	1: {
// 		group: 'Clothes',
// 		bran: {
// 			0: {
// 				brand_id: '35',
// 				brand_name: 'Adidas'
// 			},
// 			1: {
// 				brand_id: '15',
// 				brand_name: 'Zara'
// 			}
// 		}
// 	},
// 	2: {
// 		group: 'Cars',
// 		bran: {
// 			0: {
// 				brand_id: '43',
// 				brand_name: 'bmw'
// 			},
// 			1: {
// 				brand_id: '51',
// 				brand_name: 'mers'
// 			}
// 		}
// 	}
// };
// function shallowObj(obj) {
// 	let arr = Object.entries(obj).flat(3).filter((el) => (typeof el === 'object' ? el : null));
// 	for (let i = 0; i < arr.length; i++) {
// 		let group;
// 		for (let key in arr[i]) {
// 			if (key === 'group') {
// 				group = arr[i][key];
// 			}
// 			if (typeof arr[i][key] === 'object') {
// 				for (let k in arr[i][key]) {
// 					arr[i][key][k]['group'] = group;
// 				}
// 			}
// 		}
// 	}
// 	let newArr = arr.map((el) => Object.entries(el)).flat(2).filter((el) => (typeof el === 'object' ? el : null));
// 	newArr = newArr.map((el) => Object.entries(el)).flat(2).filter((el) => (typeof el === 'object' ? el : null));
// 	newArr.sort((a, b) => +a['brand_id'] - +b['brand_id']);
// 	let finalObj = { ...newArr };
// 	return finalObj;
// }
