import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Result from './pages/Result';
import { useEffect } from 'react';

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/testing' element={<Testing />} />
      <Route path='/Result' element={<Result />} />
    </Routes>
  );
};

export default App;
