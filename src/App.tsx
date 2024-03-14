import "./App.scss";
import Benefits from "./components/Benefits/Benefits";
import Description from "./components/Description/Description";
import Faq from "./components/FAQ/Faq";
import FinalCta from "./components/FinalCta/FinalCta";
import FounderInfo from "./components/FounderInfo/FounderInfo";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import Reviews from "./components/Reviews/Reviews";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Benefits />
            <FounderInfo />
            <Description />
            <Reviews />
            <Faq />
            <InfoBanner />
            <FinalCta />
        </div>
    );
}

export default App;
