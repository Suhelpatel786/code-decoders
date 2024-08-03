import "./App.css";
import CallToAction from "./components/call-to-action/CallToActionComponent";
import Featured from "./components/fetures/FeatureComponent";
import Footer from "./components/FooterComponent";
import Hero from "./components/hero-section/HeroComponent";
import Navbar from "./components/navbar-component/NavBarComponent";
import OurCallToAction from "./components/OurCallToAction";
import WhatWeDo from "./components/what-we-do-section/WhatWeDoComponent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CallToAction />
      <WhatWeDo />
      <Featured />
      <OurCallToAction />
      <Footer />
    </div>
  );
}

export default App;
