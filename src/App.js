import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Products from './components/pages/Products';
import './styles/fonts.css'

function App() {
  return (
    <body>
      <GlobalStyle/>
      <Header/>
      <Carousel/>
      <Products/>
      <Newsletter/>
      <Footer/>
      </body>
  );
}

export default App;
