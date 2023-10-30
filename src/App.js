import './App.css';
import Client from './components/Clients';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Pricing } from './components/Pricing';
import Team from './components/Team';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
    <div className='nav-hero'>
    <Navbar />
      <Hero />
    </div>
      <Client />
      <Gallery />
      <Pricing />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
