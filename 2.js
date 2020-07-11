const printInfo = (obj) => {
	console.log(`${obj.localName}: ${obj.children.length} children`);
	Array(obj.children.length)
		.fill()
		.forEach((el, i) => printInfo(obj.children[i]));
};