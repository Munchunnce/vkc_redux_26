import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Products from './components/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
