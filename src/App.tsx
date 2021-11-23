import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <div className="App">
        <h1>Visualising sorting algorithms</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Test'>Test</Link>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
