import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ThemeSelector from './components/ThemeSelector';
import './styles/styles.css';

// Main app wrapped in ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <ThemeSelector />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;