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
      <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
