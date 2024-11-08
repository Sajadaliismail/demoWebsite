import NavBar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import HowWeHelp from "./components/HowWeHelp";
import Pricing from "./components/Pricing";
import Portfolios from "./components/PortFolios";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import Vacancies from "./components/Vacancies";
import Contacts from "./components/Contacts";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <About />
      <HowWeHelp />
      <Pricing />
      <Portfolios />
      <Testimonials />
      <Insights />
      <Vacancies />
      <Contacts />
    </div>
  );
}
