import React from "react";
import { Header } from "./components/Header/Header";
import "./components/Header/Header.scss";
import { Tabs } from "./containers/Tabs/Tabs";
import "./containers/Tabs/Tabs.scss";
import { MainContent } from "./components/MainContent/MainContent";
import "./components/MainContent/MainContent.scss";
import './App.scss';


const App = () => {

	return (
		<>
			<Header />
			<Tabs />
			<MainContent />
		</>
	);
};

export default App;
