import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Exchange from './components/exchange/Exchange';
import Screener from './components/screeners/Screener';
import News from './components/news/News';
import Ideas from './components/ideas/Ideas';
import Funds from './components/funds/Funds';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Exchange/>}/>
            <Route path="/screener" element={<Screener/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/ideas" element={<Ideas/>}/>
            <Route path="/funds" element={<Funds/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
