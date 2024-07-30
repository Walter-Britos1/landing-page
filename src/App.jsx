import { Route, Routes, useLocation } from 'react-router-dom';
import CatalogSection from './components/CatalogSection/CatalogSection';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ContantSection from './components/ContantSection/ContantSection';

function App() {
  const { pathname } = useLocation()

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<CatalogSection />} />
        <Route path='/contact' element={<ContantSection />} />
      </Routes>
      {
        pathname !== '/catalog' && <Footer />  
      }
    </>
  )
}

export default App;