function shiftLeft(arr, i = 0) {
	if (i < arr.length - 1) {
		arr[i] = arr[i + 1];
		i++;
		return shiftLeft(arr, i);
	} else {
		arr.length = arr.length - 1;
		return arr;
	}
}
// console.log(shiftLeft([ 'a', 'b', 'c', 'f', 1, 5, 55, 66 ], 0));

//Ex. 2
function invertObj(ob) {
	for (let key in ob) {
		if (ob[key] in ob) {
			if (Array.isArray(ob[ob[key]])) {
				ob[ob[key]].push(key);
			} else {
				ob[ob[key]] = [ ob[ob[key]] ];
				ob[ob[key]].push(key);
			}
		} else {
			ob[ob[key]] = key;
		}

		delete ob[key];
	}
	return ob;
}

//console.log(invertObj({ a: '1', b: '2', c: '1', d: '1', e: '2', f: '2', g: '1', h: '5' }));

//Ex.3
function FilterWithSort(arr) {
	// let filteredArr = arr.filter((item) => (item.readStatus ? item : null));
	return arr.filter((item) => (item.readStatus ? item : null)).sort((a, b) => b.percent - a.percent);
}
// console.log(
// 	FilterWithSort([
// 		{ book: 'Catcher in the Rye&quot', readStatus: true, percent: 40 },
// 		{ book: 'Animal Farm&quot', readStatus: true, percent: 20 },
// 		{ book: 'Solaris&quot', readStatus: false, percent: 90 },
// 		{ book: 'The Fall&quot', readStatus: true, percent: 50 },
// 		{ book: 'White Nights&quot', readStatus: false, percent: 60 },

// 		{ book: 'After Dark&quot', readStatus: true, percent: 70 }
// 	])
// );

//Ex. 4

function shiftArr(arr, num = 0, index = 0, rotArr = []) {
	if (index === arr.length) {
		return rotArr;
	}

	if (index - num < 0) {
		rotArr[index - num + arr.length] = arr[index];
	} else if (index - num > arr.length - 1) {
		rotArr[index - num - arr.length] = arr[index];
	} else {
		rotArr[index - num] = arr[index];
	}

	index++;
	return shiftArr(arr, num, index, rotArr);
}
// console.log(shiftArr([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ], 2));

//Ex .5
function searchInNests(treeObj, nodesObj) {
	for (let key in treeObj) {
		if (treeObj.hasOwnProperty(nodesObj.parent)) {
			treeObj[nodesObj.parent][nodesObj.id] = {};
		} else {
			searchInNests(treeObj[key], nodesObj);
		}
	}
	return treeObj;
}

function arrToTree(arr, tree = {}) {
	let initial = arr.find((item) => item.parent === null);
	tree[initial.id] = {};
	for (let i = 0; i < arr.length; i++) {
		searchInNests(tree, arr[i]);
	}
	return tree;
}

let nodes = [
	{ parent: null, id: 0 },
	{ parent: 0, id: 1 },
	{ parent: 0, id: 2 },
	{ parent: 1, id: 3 },
	{ parent: 1, id: 4 },
	{ parent: 2, id: 5 },
	{ parent: 4, id: 6 },
	{ parent: 6, id: 8 }
];
// console.log(arrToTree(nodes));

//Ex.6
//chi stacvum rekursian ughghel
function loopAgain(arr, lange, tempArr = [], i = 0, index = 0, setObj = {}) {
	for (; i < arr.length; i++) {
		tempArr[index] = arr[i];
		if (index < lange - 1) {
			loopAgain(arr, lange, tempArr, i + 1, index + 1, setObj);
		}

		if (index === lange - 1) {
			setObj[tempArr] = tempArr.slice();
			loopAgain(arr, lange, tempArr, i + 1, index, setObj);
		}
	}
	return Object.keys(setObj).map((el) => el.split(',').map((el) => (el = +el)));
}

let finalArr = loopAgain([ 1, 2, 3, 4, 5, 6 ], 4);

// loopAgain([ 1, 2, 3, 4, 5, 6 ], 4);
// let finalArr = Object.keys(setObj).map((el) => el.split(',').map((el) => (el = +el)));
// console.log(finalArr);

//Ex.7
function ObjectMap() {
	this.map = function Map(mapFunc) {
		let newObj = {};
		for (let key in this) {
			newObj[key] = mapFunc(this[key]);
		}
		return newObj;
	};
}
let newObj = new ObjectMap();
newObj.a = 5;
newObj.b = 6;
newObj.c = 9;
newObj.d = 4;
newObj.e = 1;
newObj.g = 7;
newObj.h = 5;

let newObj1 = newObj.map(function(key) {
	if (typeof key === 'number') {
		return key + 10;
	} else {
		return key;
	}
});

////=========================
//fibonacci recurtion with saving previous counts in array
function fiboArr(n, holdArr = [ 1, 1 ]) {
	if (!holdArr[n]) {
		holdArr[n] = fiboArr(n - 1, holdArr) + fiboArr(n - 2, holdArr);
		return holdArr[n];
	} else {
		return holdArr[n];
	}
}
