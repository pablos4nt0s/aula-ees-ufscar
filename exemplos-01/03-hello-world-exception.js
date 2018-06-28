function bar() {
	console.log('world');
	throw new Error('hit a problem');
}
function foo() {
	setTimeout(bar, 1000);
}
setTimeout(foo, 2000);

console.log("hello");
