
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import Particles from 'react-particles-js';
import AboutMe from './components/aboutMe.js';
import Services from './components/Services.js';
import Experience from './components/Experience.js';
import Portfolio from './components/Portfolio.js';
import Testimonials from './components/Testimonials.js';
import Contacts from './components/Contacts.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Particles
    className= "particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}/>
   <NavBar/>
   <Header/>
   <AboutMe/>
   <Services/>
   <Experience/>
   <Portfolio/>
   <Testimonials/>
   <Contacts/>
   <Footer/>
   </>
  );
}

export default App;
