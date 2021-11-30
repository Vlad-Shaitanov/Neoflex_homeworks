"use strict";

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
});