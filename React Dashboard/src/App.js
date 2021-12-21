import React from "react";
import { Header } from "./components/Header/Header";
import "./components/Header/Header.scss";
import { Tabs } from "./containers/Tabs/Tabs";
import "./containers/Tabs/Tabs.scss";
import './App.scss';


const App = () => {

	return (
		<>
			<Header />
			<Tabs />
		</>
	);
};

export default App;
