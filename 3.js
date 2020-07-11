const count = (element) => {
	return element.find('li').length;
};

window.onload = () => {
	let all = parse();
	let root = $('#content')[0];

	generate(root, all);
	
	$('li').each((i, el) => {
		let childrenCount = count($(el));
		$(el)
			.children('span')
			.addClass(childrenCount > 0 ? 'red' : 'gray')
			.html(`${childrenCount}п.`);
	});

	$('li').click(function () {
		$(this).children().not('span').slideToggle();
		event.stopPropagation();
	});
};
