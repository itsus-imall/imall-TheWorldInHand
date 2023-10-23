import { useCallback, useState } from 'react';

const useInputCheked = () => {
  const [inputs, setInputs] = useState([]);

  const inputCountHandler = useCallback(newInputValue => {
    setInputs(prev => [...prev, newInputValue]);
  }, []);

  return {
    inputs,
    inputCountHandler,
  };
};

export default useInputCheked;
