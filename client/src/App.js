import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Exchange from "./components/exchange/Exchange";
import Screener from "./components/screeners/Screener";
import News from "./components/news/News";
import Ideas from "./components/ideas/Ideas";
import Funds from "./components/funds/Funds";
import { WebSocketContextProvider } from "./contextApis";
import BuyCoin from "./components/exchange/orders/BuyCoin";
import SellCoin from "./components/exchange/orders/SellCoin";

function App() {
    return (
        <>
            <Provider store={store}>
                <div className="App">
                    <WebSocketContextProvider>
                        <Router>
                            <NavBar />
                            <Routes>
                                <Route exact path="/" element={<Exchange />}>
                                    <Route path="" element={<BuyCoin />} />
                                    <Route path="sell" element={<SellCoin />} />
                                </Route>
                                <Route
                                    path="/screener"
                                    element={<Screener />}
                                />
                                <Route path="/news" element={<News />} />
                                <Route path="/ideas" element={<Ideas />} />
                                <Route path="/funds" element={<Funds />} />
                            </Routes>
                            <Footer />
                        </Router>
                    </WebSocketContextProvider>
                </div>
            </Provider>
        </>
    );
}

export default App;
