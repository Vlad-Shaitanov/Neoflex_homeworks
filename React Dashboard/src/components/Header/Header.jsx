import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "../Navbar/Navbar.scss";

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="hamburger">
					<div className="hamburger_layer"></div>
				</div>
				<div className="logo">Company Dashboard</div>
				<Navbar />
				<div className="client">
					<span>George Orwell</span>
					<img
						src="https://avatars.mds.yandex.net/get-zen_doc/1875939/pub_604d21ed011181447b2644e6_604d47a4af41a36641ef1288/scale_1200" alt="" />
				</div>
			</div>
		</header>
	);
};