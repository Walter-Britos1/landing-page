import { Route, Routes } from 'react-router-dom';
import CatalogSection from './components/CatalogSection/CatalogSection';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ContantSection from './components/ContantSection/ContantSection';

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<CatalogSection />} />
        <Route path='/contact' element={<ContantSection />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;