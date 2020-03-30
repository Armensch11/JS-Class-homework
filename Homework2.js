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
		return 'Such numbers does not exist.';
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
		if (arr[i] && arr[i] % 2 !== 0) {
			oddsArr.push(arr[i]);
		}
	}

	return oddsArr.map((item) => {
		return (item = item * oddsArr.length);
	});
}
