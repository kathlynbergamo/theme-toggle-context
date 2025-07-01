import { createContext, useState } from "react";

// Cria o contexto do tema
export const ThemeContext = createContext();

/**
 * ThemeProvider
 * Componente que provê o tema atual (light/dark) e a função de alternância.
 * Envolve todos os componentes que precisam acessar ou modificar o tema.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Alterna entre os temas claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
