import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import  Home  from './pages/Home';
import  Private  from './pages/Private';
import {} from './styles/App.css'


const HomePage: React.FC = () => {
  return (
    <div>
        <header>
            <h1>Header do Site</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/private">Privada</Link>
            </nav>
        </header>
        <hr/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/private" element={<Private/>} />
        </Routes>
    </div>
    );
}

export default HomePage;