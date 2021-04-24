import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Carousel/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
