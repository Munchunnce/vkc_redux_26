import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import Home from './pages/Home';
import Products from './components/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate import



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persstor={persistor}>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
