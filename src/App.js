import "./App.css";
import Nav from "./Components/Nav component/Nav";
import Hero from "./Components/Hero component/Hero";
import About from "./Components/About component/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import Contact from "./Components/Contact Component/Contact";
import Footer from "./Components/Footer component/Footer";
import "react-toastify/dist/ReactToastify.css";
import CursorGlow from "./Components/CursorGlow/CursorGlow";
import Timeline from "./Components/Timeline/Timeline";
import WhatsApp from "./Components/WhatsApp/WhatsApp";

function App() {
  return (
    <div className="overflow-x-hidden">
      <CursorGlow />
      <WhatsApp/>
      <Nav />
      <Hero />
      <About />
      <Timeline/>
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
