import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Testing from './pages/Testing';
import Result from './pages/Result';
import ManufacturerQuestion from './pages/Testing/Manufacturer';
import ModelQuestion from './pages/Testing/Model';
import HandShapeQuestion from './pages/Testing/HandShape';
import HandQuestion from './pages/Testing/Hand';
import NowUse from './pages/Testing/NowUse';
import Three from './pages/Testing/Three';
import Material from './pages/Testing/Material';
import Color from './pages/Testing/Color';
import Quantity from './pages/Testing/Quantity';

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
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route
            path='/testing'
            element={<Testing userInfo={userInfo ?? ''} />}
          >
            <Route path='manufacturer' element={<ManufacturerQuestion />} />
            <Route path='model' element={<ModelQuestion />} />
            <Route path='hand-shape' element={<HandShapeQuestion />} />
            <Route
              path='hand'
              element={
                <HandQuestion background='#d9d9d9' imgSrc='260x260_03_' />
              }
            />
            <Route path='now-use' element={<NowUse />} />
            <Route path='three' element={<Three type='three' />} />
            <Route path='three/소재' element={<Material type='소재' />} />
            <Route path='three/색상' element={<Color />} />
            <Route path='three/가격' element={<Three />} />
            <Route path='three/두께' element={<Three />} />
            <Route path='three/보호력' element={<Material type='보호력' />} />
            <Route
              path='brand'
              element={<HandQuestion imgSrc='260x260_06_' />}
            />
            <Route path='quantity' element={<Quantity />} />
            <Route
              path='besideProducts'
              element={<HandQuestion imgSrc='260x260_07_' />}
            />
          </Route>
          <Route path='result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
