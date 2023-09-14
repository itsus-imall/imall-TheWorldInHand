import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import ToggleMenu from '../../../components/ToggleMenu';
import { TestToggleWrapper } from '../styled';

const NowUse = () => {
  const { questions, history } = useOutletContext();
  const [toggle, setToggle] = useState(true);

  return (
    <TestToggleWrapper>
      <ToggleMenu questions={questions} toggle={toggle} setToggle={setToggle} />
    </TestToggleWrapper>
  );
};

export default NowUse;
