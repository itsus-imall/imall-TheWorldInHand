import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Result from './pages/Result';
import ManufacturerQuestion from './pages/Testing/Manufacturer';
import ModelQuestion from './pages/Testing/Model';
import HandShapeQuestion from './pages/Testing/HandShape';
import HandQuestion from './pages/Testing/Hand';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

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
          <Route
            path='/'
            element={<Home userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route path='testing' element={<Testing userInfo={userInfo} />}>
            <Route path='manufacturer' element={<ManufacturerQuestion />} />
            <Route path='model' element={<ModelQuestion />} />
            <Route path='handShape' element={<HandShapeQuestion />} />
            <Route path='hand' element={<HandQuestion />} />
          </Route>
          <Route path='result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
