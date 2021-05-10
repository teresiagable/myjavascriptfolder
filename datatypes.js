function consoleLogDatatypes() {
	let myVariable;
	myVariable = 1;
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = 'nisse';
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = true;
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = null;
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = undefined;
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = { name: 'kalle', age: 99 };
	console.log(myVariable + ' is ' + typeof myVariable);

	myVariable = function () {
		let name = 'Kent';
		console.log(name);
	};
	console.log(myVariable + ' is ' + typeof myVariable);
}
