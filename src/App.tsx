import "./App.scss";
import Benefits from "./components/Benefits/Benefits";
import Description from "./components/Description/Description";
import FounderInfo from "./components/FounderInfo/FounderInfo";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Benefits />
            <FounderInfo />
            <Description />
        </div>
    );
}

export default App;
