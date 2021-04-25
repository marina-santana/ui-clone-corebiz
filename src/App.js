import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Products from './pages/Products';
import './styles/fonts.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <body>
      <GlobalStyle/>
      <Header/>
      <Carousel/>
      <Products/>
      <Newsletter/>
      <Footer/>
      <ToastContainer/>
      </body>
  );
}

export default App;
