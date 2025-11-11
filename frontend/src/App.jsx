import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Nabvar from './components/Navbar';
import CartPage from './pages/CartPage';

function App() {
    return (
        <Router>
            <Nabvar/>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/product/:id" element={<ProductDetails/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;