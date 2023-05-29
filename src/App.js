import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import GuitarTypes from './components/guitar-types/GuitarTypes';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <GuitarTypes/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
