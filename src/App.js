// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import login from './components/Login';
import { useState } from 'react';

function App() {
  const [token,setToken]=useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App">
      

      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
