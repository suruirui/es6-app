var scope = 'global scope';

function checkScope() {
	var scope = "local scope";
	return function() {
		return scope;
	};
}

var foo = checkScope();
console.log(foo());