import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Carousel/>
    </div>
  );
}

export default App;
