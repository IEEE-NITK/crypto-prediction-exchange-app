import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Exchange from './components/exchange/Exchange';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Exchange/>
      <Footer/>
    </div>
  );
}

export default App;
