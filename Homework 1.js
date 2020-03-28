// exercise 1

function drawX(n) {
	let finalRow = '';
	for (let i = 0; i <= 2 * n; i++) {
		let row = '';
		for (let j = 0; j <= 2 * n; j++) {
			switch (true) {
				case j === i || j === 2 * n - i:
					row += '*';
					break;
				default:
					row += ' ';
					break;
			}
		}
		row += '\n';
		finalRow += row;
	}
	return finalRow;
}

//exercise 2

function frequency(arr) {
	let countArr = [];
	let length = arr.length;
	for (let i = 0; i < arr.length; i++) {
		let tempArr = [];
		let count = 1;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j && arr[i] === arr[j]) {
				arr.splice(j, 1);
				j--;
				count++;
			}
		}
		tempArr.push(arr[i]);
		tempArr.push(count / length);
		countArr.push(tempArr);
	}
	return countArr;
}

//let freqPrint = frequency([ 4, 4 ]);
//for (let i = 0; i < freqPrint.length; i++) {
//	console.log(freqPrint[i][0] + ': ' + freqPrint[i][1]);
//}

// exercise 3

function strAndNumCount(arr) {
	let countStr = 0;
	let countNum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			countStr++;
		} else {
			countNum++;
		}
	}
	let outStr = 'Numbers: ' + countNum + ', ' + 'Strings: ' + countStr;
	return outStr;
}

// exercise 4

function langsteWort(str) {
	let stringRow = [];
	let max = -Infinity;
	for (let i = 0; i < str.length; i++) {
		let tempStr = '';

		while (
			str.charCodeAt(i) !== 32 &&
			str.charCodeAt(i) !== 44 &&
			str.charCodeAt(i) !== 45 &&
			str.charCodeAt(i) !== 46
		) {
			tempStr += str[i];
			i++;
			if (i >= str.length) {
				break;
			}
		}

		if (tempStr.length >= max) {
			max = tempStr.length;
			stringRow.push(tempStr);
		}
	}
	if (stringRow.length > 1) {
		return stringRow[stringRow.length - 1];
	} else {
		return stringRow[0];
	}
}

// exercise 5
function langsteSub(str) {
	let subStrArr = [];
	let longStr = [];

	let indexHolder;
	let max = -Infinity;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ' || subStrArr.indexOf(str[i]) === -1) {
			subStrArr.push(str[i]);
			continue;
		}

		if (subStrArr.join('').length >= max) {
			max = subStrArr.join('').length;
			longStr.push(subStrArr.join(''));
		}
		if (str[i] !== ' ' && subStrArr.indexOf(str[i]) > -1) {
			indexHolder = subStrArr.indexOf(str[i]);
			subStrArr.splice(0, indexHolder + 1);
			subStrArr.push(str[i]);
		}
	}
	return longStr[longStr.length - 1];
}

// exercise 6

function coder(str) {
	let codeArr = [];
	for (let j = 0; j < str.length; j += 3) {
		codeArr.push(str.slice(j, j + 3));
	}
	for (let i = 0; i < codeArr.length; i++) {
		if (codeArr[i].length === 3) {
			let firstLetter = codeArr[i][0];
			codeArr[i] = codeArr[i].slice(1);
			codeArr[i] = codeArr[i] + firstLetter;
		}
	}
	return codeArr.join('');
}

// exercise 7
function minusProd(arr) {
	let maxNegative;
	let negativeArr = [];
	for (let i = 0; i < arr.length; i++) {
		maxNegative = -Infinity;
		let j = 0;
		if (!Array.isArray(arr[i])) {
			return 'Invalid Arguments';
		}
		while (j < arr[i].length) {
			if (arr[i][j] < 0 && arr[i][j] >= maxNegative) {
				maxNegative = arr[i][j];
			}
			j++;
		}
		if (maxNegative !== -Infinity) {
			negativeArr.push(maxNegative);
		}
	}
	if (negativeArr.length !== 0) {
		let prod = 1;
		for (let i = 0; i < negativeArr.length; i++) {
			prod *= negativeArr[i];
		}
		return prod;
	} else {
		return ' No negatives';
	}
}

//exercise 8

//chgitem vonc en sa lutsum
