import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SliderCarousel from "./common/Slider/Slider";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
        </div>
    );
}

export default App;
