import './App.css';
import Nav from './Components/Nav component/Nav';
import Hero from './Components/Hero component/Hero';
import About from './Components/About component/About';
import MyProjects from './Components/MyProjects/MyProjects';
import Contact from './Components/Contact Component/Contact';
import Footer from './Components/Footer component/Footer';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <MyProjects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
