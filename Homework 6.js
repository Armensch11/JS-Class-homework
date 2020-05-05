//Ex.1

function uniqueCheck(...arr) {
	return Array.from(new Set(arr)).length === arr.length ? true : false;
}
console.log(uniqueCheck('', NaN, 10, 'adfg', null, '    ', 'ef', null, 'Ef'));
//=======================

//Ex.2
function evenSum(...arr) {
	return arr.reduce((sum, item) => (!(Math.sqrt(item) % 2) ? (sum += item) : (sum += 0)), 0);
}
// console.log(evenSum(2, 3, 4, 5, 2, 2));
//============================
//Ex.3
function checkDrom(str) {
	return [ ...str ].reverse().join('') === str ? true : false;
}
// console.log(checkDrom('erghhgreh'));

//==========================
//Ex.4

function findMatch(word, list) {
	let check = list.map((el) => el.split('').sort().join(''));
	let checkWord = word.split('').sort().join('');
	let indexArr = check
		.map((el, index) => (el === checkWord ? index : undefined))
		.filter((index) => (index ? index : null));

	return indexArr.map((el) => list[el]);
}
// console.log(findMatch('listen', [ 'enlists', 'itnlse', 'google', 'inlets', 'banana' ]));
