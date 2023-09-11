import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Result from './pages/Result';
import ModelQuestion from './components/ModelQuestion';

const App = () => {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    let timeoutId;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setScreenSize();
      }, 300);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav></nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testing' element={<Testing />}>
            <Route path='manufacturer' element={<ModelQuestion />} />
            <Route path='model' element={<ModelQuestion />} />
          </Route>
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
