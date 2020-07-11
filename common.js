const parse = () => [JSON.parse(animals), JSON.parse(fish)];

const format = (obj, lvl) => {
	if (obj.childs && obj.childs.length > 0) {
		return `<li>${obj.text} <span></span>\n<ul>\n${obj.childs.map(el => format(el, lvl + 1)).join('\n')}\n</ul></li>`;
	} else {
		return `<li>${obj.text} <span></span></li>`;
	}
};

const generate = (root, content) => {
	root.innerHTML = `<ul>\n${format(content[0])}\n</ul>\n<ul>\n${format(content[1])}\n</ul>`;
};