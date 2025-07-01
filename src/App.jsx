import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

// ------------------- useContext ------------------------------------------
// o usecontent é um hook ultilizado para consumir um context da context API
const App = () => {
  const { theme } = useContext(ThemeContext); // {theme}
  return (
    <div className= {`App ${theme == 'dark' ? 'dark-theme' : ''}`}>
      <Navbar />
      <Outlet /> {/* Renderiza os componentes filhos definidos nas rotas */}
    </div>
  );
}
export default App;
  