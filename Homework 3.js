//Ex 1.

function checkOdd(number) {
	if ((number % 10) % 2 === 0) {
		return false;
	}
	number = (number - number % 10) / 10;
	if (number > 0) {
		return checkOdd(number);
	} else {
		return true;
	}
}

//Ex. 2

function findLowestPositive(arr, min) {
	if (arr[0] >= 0 && arr[0] < min) {
		min = arr[0];
	}
	arr.splice(0, 1);
	if (arr.length) {
		return findLowestPositive(arr, min);
	}

	return min === +Infinity ? -1 : min;
}
//console.log(findLowestPositive([ -56, -87, 2, -4, -3, 3, -2, -23, -105, 0, -55, -1 ], +Infinity));

//Ex. 3
function fiboRecursion(num) {
	if (num === 0) {
		return 0;
	}
	if (num === 1) {
		return 1;
	}
	if (num >= 2) {
		return fiboRecursion(num - 1) + fiboRecursion(num - 2);
	}
}

function fiboArray(num) {
	let resArr = [];
	for (let i = 1; i <= num; i++) {
		resArr.push(fiboRecursion(i));
	}
	return resArr;
}
//console.log(fiboArray(10));

//Ex. 4

function flatTheArr(arr) {
	let finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			finalArr.push(...flatTheArr(arr[i]));
		} else {
			finalArr.push(arr[i]);
		}
	}
	return finalArr;
}

//Ex. 5

function digitSum(number) {
	let sum = 0;
	while (number > 0) {
		sum += number % 10;
		number = (number - number % 10) / 10;
	}
	if (sum > 9) {
		return digitSum(sum);
	} else {
		return sum;
	}
}
