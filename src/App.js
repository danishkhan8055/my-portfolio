import './App.css';
import About from './Components/About component/About';
import Contact from './Components/Contact Component/Contact';
import Footer from './Components/Footer component/Footer';
import Hero from './Components/Hero component/Hero';
import Nav from './Components/Nav component/Nav';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
