const drop = document.querySelector(".dropdown"); // dropdown button

//dropdown toggle logic for button
drop.addEventListener("click", () => {
	if (document.querySelector(".option__wrapper").style.display == "none") {
		document.querySelector(".option__wrapper").style.display = "inline-block";
		document.querySelector(".option__wrapper").style.height = "fit-content";
	} else {
		document.querySelector(".option__wrapper").style.display = "none";
	}
});

//converting the node list to an JS array
const optionList = [...document.querySelectorAll(".option")];

// manipulating the input with the option's value attribute.
optionList.forEach((e) => {
	const input = document.querySelector(".select__input");
	e.addEventListener("click", (e) => {
		input.value = e.target.getAttribute("value");
		//e.target.value is not possible..since this isn't an option tag..its a div tag
		console.log(input.value);
		document.querySelector(".option__wrapper").style.display = "none";
	});
});

// Input component
const selectInput = document.querySelector(".select__input");

// key up event, input keys..(credits to NPM)
selectInput.addEventListener("keyup", () => {
	let curValue = selectInput.value;
	let matches = optionList.filter((e) =>
		e.getAttribute("value").toLowerCase().startsWith(curValue.toLowerCase())
	);
	renderSearch(matches);

	document.querySelector(".option__wrapper").style.display = "inline-block";

	console.log(matches);
	if (curValue.length == 0) {
		document.querySelector(".option__wrapper").style.display = "none";
		matches = optionList;
		//render the markup for the filtered search
		renderSearch(matches);
	}
});

//tracking the backspace key
selectInput.addEventListener("keydown", (e) => {
	if (e.keyCode === 8) {
		let curValue = selectInput.value;
		let matches = optionList.filter((e) =>
			e.getAttribute("value").toLowerCase().startsWith(curValue)
		);
		//render the markup for the filtered search
		renderSearch(matches);
		document.querySelector(".option__wrapper").style.display = "inline-block";

		console.log(matches);
		// closing the option wrapper if the backspace is pressed until input is null
		if (curValue.length == 0) {
			document.querySelector(".option__wrapper").style.display = "none";
			matches = optionList;
		}
	}
});

const renderSearch = (matches) => {
	//reset the whole division
	document.querySelector(".option__wrapper").innerHTML = "";
	matches.forEach((e) => {
		//markup for a single search option
		const markup = `<div class="option" 
		value="${e.getAttribute("value")}">${e.getAttribute("value")}</div>`;

		//inserting before-end...to render the search by order
		document
			.querySelector(".option__wrapper")
			.insertAdjacentHTML("beforeend", markup);
	});

	//recreating the event listener ---> !important step
	document.querySelector(".option").addEventListener("click", (e) => {
		selectInput.value = e.target.getAttribute("value");
		// once an option is clicked.. wrapper disappears
		document.querySelector(".option__wrapper").style.display = "none";
	});
};
