"use strict";


window.addEventListener("DOMContentLoaded", () => {

	const tabsPanel = document.querySelector(".tabs"),
		tabs = document.querySelectorAll(".tabs_item"),
		tabsContent = document.querySelectorAll(".tabs_content"),

		cardsBlock = document.querySelector(".cards");

	let users = [];


	const getCharacters = async () => {
		const response = await fetch("https://randomuser.me/api/?results=25");
		let characters = await response.json();

		const fetchedUsers = [...characters.results];

		fetchedUsers.map(item => {
			users.push(item);
		});

		changePage(1);
	};
	getCharacters();


	const getCards = async () => {
		const req = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
		const cards = await req.json();

		return cards;
	};


	/*=================*/
	/*===== Cards =====*/
	/*=================*/

	const createCards = async () => {
		const cards = await getCards();

		cards.map((item, ind) => {
			cardsBlock.insertAdjacentHTML("beforeend", `
				<div class="card_item">
					<img src="https://ucare.timepad.ru/599fab4c-51ee-46d6-bafa-0456510ab487/poster_event_1501201.jpg"
						alt="img${ind}">
					<div class="card_body">
						<p class="card_body_title">${item.name}</p>
						
						<div class="card_body_date">17.11.21</div>
						<div class="card_body_img">
							<svg class="like icon_unliked" width="15" height="15" viewBox="0 0 15 15"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13.544 0.979025C11.9386 -0.513489 9.55096 -0.245028 8.07735 1.41368L7.50022 2.06246L6.92308 1.41368C5.4524 -0.245028 3.06182 -0.513489 1.45639 0.979025C-0.383422 2.69206 -0.4801 5.76658 1.16635 7.62343L6.83519 14.009C7.20139 14.4212 7.79611 14.4212 8.16231 14.009L13.8311 7.62343C15.4805 5.76658 15.3839 2.69206 13.544 0.979025Z" />
							</svg>
						</div>
						<p class="card_body_text">${item.body}
						</p>
					</div>
					<button type="button" class="card_item_button">Read More</button>
				</div>
			`);
		});

		const likeButtons = document.querySelectorAll(".card_body_img");

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
	};

	createCards();


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



	/*======================*/
	/*===== Pagination =====*/
	/*======================*/


	const leftArrow = document.querySelector(".arrow_left"),
		rightArrow = document.querySelector(".arrow_right"),
		table = document.querySelector(".table_grid"),
		paginationItems = document.querySelector(".pagination_items");

	let currentPage = 1;
	let recordsOnPage = 10;
	let rowsLength = users.length;


	const numPages = () => {
		return Math.ceil((rowsLength - 1) / recordsOnPage);
	};
	// numPages();

	function changePage(page) {

		rowsLength = users.length;

		leftArrow.addEventListener("click", prevPage);
		rightArrow.addEventListener("click", nextPage);

		if (page < 1) page = 1;
		if (page > numPages()) page = numPages();


		let startItem = currentPage == 1 ? 0 : (currentPage - 1) * recordsOnPage;
		let endItem = startItem + recordsOnPage;

		let dataToShow = users.slice(startItem, endItem);
		// console.log("ShownData", dataToShow);

		[...table.querySelectorAll(".row_body")].forEach(row => {
			row.remove();
		});
		[...paginationItems.querySelectorAll("li")].forEach(li => {
			li.remove();
		});

		dataToShow.map(item => {

			table.insertAdjacentHTML("beforeend", `
				<div class="row1 row_body">
					<div class="col1">${item.name.first} ${item.name.last}</div>
					<div class="col2">${item.location.city}</div>
					<div class="col3">${item.phone}</div>
				</div>
			`);
		});

		for (let i = 1; i <= numPages(); i++) {
			paginationItems.insertAdjacentHTML("beforeend", `
				<li class=${i === currentPage ? "pagination_selected" : ""}>${i}</li>
			`);

		}

	};

	paginationItems.addEventListener("click", event => {
		const newPage = event.target.innerHTML;
		currentPage = newPage;

		changePage(newPage);
		event.target.classList.add("pagination_selected");
	});


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

	function changeRows(value) {
		recordsOnPage = +value;
	}

	changePage(currentPage);



	/*====================*/
	/*===== Selector =====*/
	/*====================*/

	let select = document.querySelector("#select");

	select.addEventListener("change", (event) => {
		let selectValue = event.target.value;
		changeRows(selectValue);

		changePage(currentPage = 1);

	});

});