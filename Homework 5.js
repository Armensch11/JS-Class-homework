function binarFind(arr, num) {
	let iMin = 0;
	let iMax = arr.length;
	let iCurrent;

	while (arr[iCurrent] !== num) {
		iCurrent = Math.floor((iMax + iMin) / 2);
		if (arr[iCurrent] >= num) {
			iMax = iCurrent - 1;
		} else {
			iMin = iCurrent + 1;
		}
	}
	return iCurrent;
}

// console.log(binarFind([ 1, 3, 4, 5, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 30, 31, 32, 35, 36, 40 ], 13));
// console.log([ 1, 3, 4, 5, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 30, 31, 32, 35, 36, 40 ].indexOf(30));
//  let check = [ 1, 3, 4, 5, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 30, 31, 32, 35, 36, 40 ];
// let check = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l', 'm', 'n' ];
function binSearchRec(arr, num, iMax = arr.length, iMin = 0, iCurrent = 0) {
	if (arr[iCurrent] === num) {
		return iCurrent;
	}
	iCurrent = Math.floor((iMax + iMin) / 2);
	// debugger;
	if (arr[iCurrent] >= num) {
		return binSearchRec(arr, num, (iMax = iCurrent - 1), iMin, iCurrent);
	} else {
		return binSearchRec(arr, num, iMax, (iMin = iCurrent + 1), iCurrent);
	}
}

// console.log(binSearchRec(check, 'k'));
// console.log(check.indexOf('k'));

//mi indexov
function binSearchRec(arr, num, iCurrent = Math.floor((arr.length - 1) / 2)) {
	if (arr[iCurrent] === num) {
		return iCurrent;
	}

	// debugger;
	if (arr[iCurrent] < num) {
		return binSearchRec(arr, num, iCurrent + Math.floor(iCurrent / 2));
	} else {
		return binSearchRec(arr, num, Math.floor(iCurrent / 2));
	}
}
