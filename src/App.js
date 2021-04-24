import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
