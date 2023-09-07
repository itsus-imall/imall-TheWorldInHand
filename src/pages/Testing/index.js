import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';
import Progress from '../../components/Progress';
import { Outlet } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

const Testing = () => {
  const { isLoading, error, data } = useQuery(['question'], getQuestion);
  const [pageCount, setPageCount] = useState(0);

  const onSubmit = event => {
    event.preventDefault();
    setPageCount(prev => ++prev);
  };

  const filter = () => {
    if (isLoading) return;
    console.log(pageCount);
    console.log(Object.keys(data));
  };

  useEffect(() => {
    filter();
  });

  return (
    <S.TestWrapper as='form' onSubmit={onSubmit}>
      <Progress pageCount={pageCount} />
      <Outlet />
      <button>asdf</button>
    </S.TestWrapper>
  );
};

export default Testing;
