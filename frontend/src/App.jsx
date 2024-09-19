import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Components from './pages/Components';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {/* <button
        className="p-2 m-4 text-white bg-gray-800 rounded-md dark:bg-white dark:text-black"
        onClick={toggleTheme}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button> */}

      <Router>
      <Navbar toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme}/>} />
          <Route path="/components" element={<Components/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
