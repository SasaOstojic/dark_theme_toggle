import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switched, setOnSwitched] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setOnSwitched(!switched);
  };

  //checking from local storage if theme is dark or light when page first loads
  useEffect(() => {
    if(theme === 'dark'){
      setOnSwitched(true)
    }
  },[theme])


  return (
    <div className="main">
      <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switched} />
      <Hero myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;
