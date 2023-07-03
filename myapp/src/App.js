// import logo from './logo.svg';
import './App.css';
// import Card from './components/card'
import Header from './components/nav'
import About from './components/about'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Nopage from './components/nopage'
import Contact from './components/contact'
import Footer from './components/footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Nopage />} />
   </Routes>
   <Footer />
   </>
    </BrowserRouter>
  );
}

export default App;
