import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';
import Progress from '../../components/Progress';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';

const questionReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_FETCH':
      return { ...state, data: action.payload };
    case 'FILTER':
      const { count, question } = filter(state);
      return { ...state, count, question };
    default:
      return;
  }
};

const initalState = {
  count: 0,
  data: null,
  question: {
    title: '사용하는 제품을 선택해 주세요.',
    subTitle: '',
    question: ['삼성', '애플'],
  },
};

const filter = ({ count, data }) => {
  const question = data;
  count += 1;
  return { count, question };
};

const Testing = () => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { isLoading, data } = useQuery(['question'], getQuestion);
  const [{ count, question }, dispatch] = useReducer(
    questionReducer,
    initalState,
  );
  console.log(data);
  useEffect(() => {
    if (isLoading) return;
    dispatch({ type: 'DATA_FETCH', payload: data });
  }, [data, isLoading]);

  const onClick = () => {
    dispatch({ type: 'FILTER' });
    setButtonDisabled(true);
  };

  return (
    <S.TestWrapper>
      <Progress count={{ count }} />
      <S.QuestionTitleWrapper>
        <h2>{question.title}</h2>
        <p>{question.subTitle}</p>
      </S.QuestionTitleWrapper>
      <Outlet context={{ question, setButtonDisabled }} />
      <button onClick={onClick} disabled={buttonDisabled}>
        다음
      </button>
    </S.TestWrapper>
  );
};

export default Testing;
