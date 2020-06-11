class Author {
	constructor(name, surname, email, gender) {
		(this.name = name), (this.email = email), (this.gender = gender), (this.surname = surname);
		// get fullname(){
		//     return this.surname+' '+ this.name;
		// },
		// set fullname(value){
		//     [this.name, this.surname]=value.split(' ');
		// };
	}
	get fullname() {
		return this.surname + ' ' + this.name;
	}
	set fullname(value) {
		[ this.name, this.surname ] = value.split(' ');
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
	constructor(title, price, _author, quantity) {
		(this.title = title), (this.price = price), (this.quantity = quantity);
	}
	set author(_author) {
		if (_author instanceof Author) {
			this.author = _author;
		} else {
			console.log("we don't recognise that author");
		}
	}
	get author() {
		return this.author;
	}
	getProfit() {
		return this.quantity * this.price;
	}
	toString() {}
}
