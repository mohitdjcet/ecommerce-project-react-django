import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from "./pages/ProductList";
import ProuctDetails from "./pages/ProductDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/product/:id" element={<ProuctDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;