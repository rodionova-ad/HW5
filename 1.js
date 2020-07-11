window.onload = () => {
	let content = parse();
	let root = $('#content')[0];

	generate(root, content);
	
	printInfo($('html')[0]);
};