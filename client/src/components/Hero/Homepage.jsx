import AboutUs from "../Feature/AboutUs";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import GetStarted from "../GetStarted";
import Hero from "./Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import Pricing from "../Pricing/Pricing";
import Testimonal from "../Testimonal/Testimonal";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Feature />
      <AboutUs />
      <HowItWorks />
      <Testimonal />
      <Pricing />
      <GetStarted />
    </div>
  );
};

/*
    First
        -Hero or -Login/Logout
    Feature
    AboutUs
    How It Works
    Testimonal
    Pricing
    Blog
    Footer
*/

export default Homepage;
