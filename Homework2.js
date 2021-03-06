//Ex.1

function numInArray(arr, num) {
	let finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num) {
			finalArr.push(arr[i]);
		}
	}
	if (!finalArr.length) {
		return 'Sush values do not exist.';
	}
	return finalArr;
}

//Ex.2

function numWithEvenDigits(lower, upper) {
	let numRow = [];
	let digitEven = true;
	for (let i = lower; i <= upper; lower % 2 === 0 ? (i += 2) : i++) {
		//tivy shur em talis , vor ete kentova sksvum, animast minchev verji
		//tivy chgna while-s
		let checkNum = +String(i).split('').reverse().join('');
		while (checkNum > 0) {
			let lastDigit = checkNum % 10;
			if (lastDigit % 2 !== 0) {
				digitEven = false;
				break;
			}
			checkNum = (checkNum - lastDigit) / 10;
		}
		if (digitEven) {
			numRow.push(i);
		}
		digitEven = true;
	}
	if (numRow.length) {
		return numRow.join(',');
	} else {
		return 'Such numbers do not exist.';
	}
}

// Ex. 3
function violationIndex(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			return i;
		}
	}
	return -1;
}

// Ex. 4
function largestProd(arr) {
	let prod = -Infinity;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] * arr[i + 1] > prod) {
			prod = arr[i] * arr[i + 1];
		}
	}
	return prod;
}

// Ex 4*
function largestProdForAllAdj(arr) {
	let prod = -Infinity;
	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i - 1] * arr[i] * arr[i + 1] > prod) {
			prod = arr[i - 1] * arr[i] * arr[i + 1];
		}
	}
	return prod;
}

// ex 5
function missingNums(arr) {
	let max = -Infinity;
	let min = +Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min + 1 - arr.length;
}

//ex5*
function missingNums(arr) {
	let min = +Infinity,
		max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		arr[i] > max ? (max = arr[i]) : null;
		arr[i] < min ? (min = arr[i]) : null;
	}
	let missingNumsArr = [];
	for (let i = min; i <= max; i++) {
		arr.indexOf(i) === -1 ? missingNumsArr.push(i) : null;
	}
	//console.log(missingNumsArr);
	return missingNumsArr.length;
}

// ex 6.
function nestedSum(arr) {
	let sumArr = [];
	for (let i = 0; i < arr.length; i++) {
		let nestSum = 0;
		for (let j = 0; j < arr[i].length; j++) {
			nestSum += arr[i][j];
		}
		sumArr.push(nestSum);
	}
	return sumArr;
}

// ex 7
function oddsByNewLength(arr) {
	let oddsArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && arr[i] && arr[i] % 2 !== 0) {
			oddsArr.push(arr[i]);
		}
	}

	return oddsArr.map((item) => {
		return (item = item * oddsArr.length);
	});
}

let arr = oddsByNewLength([ 1, 2, 3, 4, 0, 5, 6, 9, 4, 10, 'sdfa' ]);
console.log(arr);

//Ex. 7*
function oddsByNewLengthForEach(arr) {
	let oddsArr = [];
	arr.forEach((item) => (item % 2 !== 0 ? oddsArr.push(item) : null));
	return oddsArr.map((item) => item * oddsArr.length);
}
//Ex 7*
function oddsByNewLengthFilter(arr) {
	arr = arr.filter((item) => item % 2 !== 0);
	return arr.map((item) => item * arr.length);
}
//Ex. 7**
function oddsByNewLengthProto(arr) {
	Array.prototype.oddsByNewLength = function() {
		let newArr = this.filter((item) => item % 2 !== 0);

		return newArr.map((item) => item * newArr.length);
	};

	return arr.oddsByNewLength();
}

//Ex.7** tried using Object
function oddsByNewLengthObj(arr) {
	let oddsObj = {};
	let k = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] && arr[i] % 2 !== 0) {
			oddsObj[arr[i]] = '';
			k++;
		}
	}
	let size = Symbol('size');
	oddsObj[size] = --k;

	console.log(oddsObj);
	for (key in oddsObj) {
		//if (key !== 'size') {
		oddsObj[key] = key * oddsObj[size];
		//}
	}
	return oddsObj;
}
