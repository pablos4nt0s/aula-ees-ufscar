setTimeout(function () {
	console.log("world");
}, 2000);

console.log("hello");

function foo() {
	debugger;
	return 1+2;
}

foo();
