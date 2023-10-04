import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  console.log(location);
  return <div>Result</div>;
};

export default Result;
