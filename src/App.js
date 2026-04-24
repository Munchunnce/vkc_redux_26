import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import Products from './components/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
