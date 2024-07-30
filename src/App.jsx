import { Route, Routes } from 'react-router-dom';
import CatalogSection from './components/CatalogSection/CatalogSection';
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<CatalogSection />} />
      </Routes>
    </>
  )
}

export default App;