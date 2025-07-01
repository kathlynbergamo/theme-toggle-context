import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * Home
 * Componente da página inicial com botão para alternar o tema.
 */
const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={toggleTheme}>Mudar tema</button>
      <p>O tema atual é: <strong>{theme}</strong></p>
    </div>
  );
};

export default Home;
