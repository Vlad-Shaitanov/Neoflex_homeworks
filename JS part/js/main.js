"use strict";

const data = [
	{ position: "some pos#1", location: "some pos#1", price: "some pos#1" },
	{ position: "some pos#2", location: "some pos#2", price: "some pos#2" },
	{ position: "some pos#3", location: "some pos#3", price: "some pos#3" },
	{ position: "some pos#4", location: "some pos#4", price: "some pos#4" },
	{ position: "some pos#5", location: "some pos#5", price: "some pos#5" },
	{ position: "some pos#6", location: "some pos#6", price: "some pos#6" },
	{ position: "some pos#7", location: "some pos#7", price: "some pos#7" },
	{ position: "some pos#8", location: "some pos#8", price: "some pos#8" },
	{ position: "some pos#9", location: "some pos#9", price: "some pos#9" },
	{ position: "some pos#10", location: "some pos#10", price: "some pos#10" },
	{ position: "some pos#11", location: "some pos#11", price: "some pos#11" },
	{ position: "some pos#12", location: "some pos#12", price: "some pos#12" },
	{ position: "some pos#13", location: "some pos#13", price: "some pos#13" },
	{ position: "some pos#14", location: "some pos#14", price: "some pos#14" },
	{ position: "some pos#15", location: "some pos#15", price: "some pos#15" },
	{ position: "some pos#16", location: "some pos#16", price: "some pos#16" },
	{ position: "some pos#17", location: "some pos#17", price: "some pos#17" },
	{ position: "some pos#18", location: "some pos#18", price: "some pos#18" },
	{ position: "some pos#19", location: "some pos#19", price: "some pos#19" },
	{ position: "some pos#20", location: "some pos#20", price: "some pos#20" }

];

window.addEventListener("DOMContentLoaded", () => {

	const tabsPanel = document.querySelector(".tabs"),
		tabs = document.querySelectorAll(".tabs_item"),
		tabsContent = document.querySelectorAll(".tabs_content"),
		likeButtons = document.querySelectorAll(".card_body_img");


	/*================*/
	/*===== TABS =====*/
	/*================*/

	const hideTab = (num) => {

		for (let i = num; i < tabsContent.length; i++) {

			tabsContent[i].classList.remove("show");
			tabsContent[i].classList.add("hide");
		}
	};

	hideTab(1);

	const showTab = (num) => {
		if (tabsContent[num].classList.contains("hide")) {
			tabsContent[num].classList.remove("hide");
			tabsContent[num].classList.add("show");
		}
	};


	tabsPanel.addEventListener("click", (event) => {
		const target = event.target;

		tabs.forEach(item => {
			item.classList.remove("active");
			item.querySelector("span").innerText = "Inactive tab";

		});


		if (target.closest(".tabs_item")) {

			for (let i = 0; i < tabs.length; i++) {

				if (target.closest(".tabs_item") == tabs[i]) {
					tabs[i].classList.add("active");
					tabs[i].querySelector("span").innerText = "Active tab";
					hideTab(0);
					showTab(i);
					break;
				}
			}
		}
	});


	/*=============================*/
	/*===== Toggling of icons =====*/
	/*=============================*/


	likeButtons.forEach(item => {

		item.addEventListener("click", (event) => {

			const target = event.target.closest(".card_body_img");
			const icon = target.querySelector("svg");

			if (target && icon.classList.contains("icon_unliked")) {

				icon.classList.remove("icon_unliked");
				icon.classList.add("icon_liked");

			} else if (icon.classList.contains("icon_liked")) {

				icon.classList.remove("icon_liked");
				icon.classList.add("icon_unliked");

			}

		});
	});

	/*====================*/
	/*===== Selector =====*/
	/*====================*/
	const select = document.querySelector("#select"),
		rows = document.querySelectorAll(".row1"),
		table = document.querySelector(".table_grid");

	select.addEventListener("change", (event) => {
		console.log(event.target.value);
		console.log("Rows", rows);


		rows.forEach(item => {
			if (!item.classList.contains("head")) {
				item.remove();
				console.log("Deleted");
			}
		});

		for (let i = 0; i < event.target.value; i++) {

			table.insertAdjacentHTML("beforeend", `
				<div class="row1">
					<div class="col1">${data[i].position}</div>
					<div class="col2">${data[i].location}</div>
					<div class="col3">${data[i].price}</div>
				</div>	
			`);
		}
	});

	/*======================*/
	/*===== Pagination =====*/
	/*======================*/

	let currentPage = 1;
	let recordsOnPage = 10;
	const rowsLength = data.length;

	const numPages = () => {
		return Math.ceil((rowsLength - 1) / recordsOnPage);
	}

	const changePage = (page) => {
		const leftArrow = document.querySelector(".arrow_left"),
			rightArrow = document.querySelector(".arrow_right"),
			table = document.querySelector(".table_grid"),
			rowBody = document.querySelectorAll(".row_body");

		leftArrow.addEventListener("click", prevPage);
		rightArrow.addEventListener("click", nextPage);

		if (page < 1) page = 1;
		if (page > numPages()) page = numPages();

		data.map(row => {
			table.insertAdjacentHTML("beforeend", `
				<div class="row1 row_body">
					<div class="col1">${row.position}</div>
					<div class="col2">${row.location}</div>
					<div class="col3">${row.price}</div>
				</div>
			`);
		});

		[...table.querySelectorAll(".row_body")].forEach(row => {
			row.style.display = "none";
		});


		let startItem = currentPage * recordsOnPage;
		let endItem = startItem + recordsOnPage;

		let dataToShow = data.slice(startItem, endItem);
		console.log("Shonwdata", dataToShow);


		dataToShow.map((row, indx) => {
			// row.style.display = "";
			// table.querySelector(".row_body")[row];
			// [...rowBody].forEach((item, i) => {
			// 	item.style.display = "grid";
			// });
			// [...rowBody].
			// console.log("Map", [...rowBody][indx]);
		});

	};

	function prevPage() {

		if (currentPage > 1) {

			currentPage--;
			changePage(currentPage);
		}

	}

	function nextPage() {

		if (currentPage < numPages()) {

			currentPage++;
			changePage(currentPage);
		}

	}

	changePage(currentPage);
});