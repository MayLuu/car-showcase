import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { DetailPage } from './pages/Detail';
import { CarListPage } from './pages/CarList';
import { ContactUs } from './pages/Contact';
import { PriceTable } from './pages/PriceTable';
import { NewsPage } from './pages/NewsPage';
import { AllList } from './pages/AllList';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        {/* <Breadcrumbs /> */}
        <a href='tel:0983104636' className="float">
          <i className="bx bxs-phone-call" style={{ "color": "white" }}></i>
          090.638.38.77
        </a>

      </header>

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/:name/:id" element={<DetailPage />} />
        <Route path="/dong-xe" element={<AllList />} />
        <Route path="/:name" element={<CarListPage />} />
        <Route path="/lien-he" element={<ContactUs />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/bang-gia" element={<PriceTable />} />
        <Route path="*" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
