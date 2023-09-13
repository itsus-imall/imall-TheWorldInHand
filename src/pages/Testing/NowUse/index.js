import { useOutletContext } from 'react-router-dom';
import ToggleMenu from '../../../components/ToggleMenu';
import { useState } from 'react';

const NowUse = () => {
  const { questions, history } = useOutletContext();
  const [toggle, setToggle] = useState(true);

  return (
    <ToggleMenu questions={questions} toggle={toggle} setToggle={setToggle} />
  );
};

export default NowUse;
