const drop = document.querySelector(".dropdown");

drop.addEventListener("click", () => {
	if (document.querySelector(".option__wrapper").style.display == "none") {
		document.querySelector(".option__wrapper").style.display = "inline-block";
	} else {
		document.querySelector(".option__wrapper").style.display = "none";
	}
});
const optionList = [...document.querySelectorAll(".option")];
optionList.forEach((e) => {
	const input = document.querySelector(".select__input");
	e.addEventListener("click", (e) => {
		input.value = e.target.getAttribute("value");
		console.log(input.value);
		document.querySelector(".option__wrapper").style.display = "none";
	});
});

const selectInput = document.querySelector(".select__input");
selectInput.addEventListener("keypress", () => {
	document.querySelector(".option__wrapper").style.display = "inline-block";
});
/* const selectInput = document.querySelector(".select__input");
selectInput.addEventListener("keypress", () => {
	let curValue = selectInput.value;
	let matches = optionList.filter((e) =>
		e.getAttribute("value").toLowerCase().startsWith(curValue)
	);
	renderSearch(matches);

	document.querySelector(".option__wrapper").style.display = "inline-block";

	console.log(matches);
	if (curValue.length == 0) {
		document.querySelector(".option__wrapper").style.display = "none";
		matches = optionList;
	}
});

selectInput.addEventListener("keydown", (e) => {
	if (e.keyCode === 8) {
		let curValue = selectInput.value;
		let matches = optionList.filter((e) =>
			e.getAttribute("value").toLowerCase().startsWith(curValue)
		);
		renderSearch(matches);
		document.querySelector(".option__wrapper").style.display =
			"inline-block";

		console.log(matches);
		if (curValue.length == 0) {
			document.querySelector(".option__wrapper").style.display = "none";
			matches = optionList;
		}
	}
});
const renderSearch = (matches) => {
	document.querySelector(".option__wrapper").innerHTML = "";
	matches.forEach((e) => {
		const markup = `<div class="option" value="${e.getAttribute(
			"value"
		)}">${e.innerHTML}</div>`;
		document
			.querySelector(".option__wrapper")
			.insertAdjacentHTML("beforeend", markup);
	});
};
document.querySelector(".option").addEventListener("click", (e) => {
	selectInput.value = e.target.getAttribute("value");
}); */
