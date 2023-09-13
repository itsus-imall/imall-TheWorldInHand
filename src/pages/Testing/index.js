import { useCallback, useEffect, useReducer, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';

import Progress from '../../components/Progress';
import Title from '../../components/Title';
import { initalState, questionReducer } from '../../reducer/reducer';

const Testing = ({ userInfo }) => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { isLoading, data } = useQuery(['question'], getQuestion);

  if (!userInfo) navigate('/');

  const [{ count, values, history }, dispatch] = useReducer(
    questionReducer,
    initalState,
  );

  const nextBtnClickHandler = useCallback(() => {
    const inputs = Array.from(document.querySelectorAll('input'));
    const checkedInputs = inputs
      .filter(input => input.checked)
      .map(input => input.value);
    dispatch({ type: 'NEXT', payload: checkedInputs });
    setButtonDisabled(true);
    navigate(values.nextURL);
  }, [navigate, values.nextURL]);

  const prevBtnClickHandler = useCallback(
    event => {
      event.preventDefault();
      if (count !== 0) {
        dispatch({ type: 'PREV' });
        setButtonDisabled(false);
      } else {
        if (
          !window.confirm(
            '뒤로가시면 다시 시작하셔야 합니다.\n정말 나가시겠습니까?',
          )
        )
          return;
      }
      navigate(-1);
    },
    [count, navigate],
  );

  const inputCheckedHandler = () => setButtonDisabled(false);

  useEffect(() => {
    if (isLoading) return;
    dispatch({ type: 'DATA_FETCH', payload: data });
  }, [data, isLoading]);

  return (
    <S.Wrapper as={'form'} onChange={inputCheckedHandler}>
      <Progress count={{ count }} />
      <Title contents={values.contents} />
      <Outlet
        context={{ questions: values.questions, history: history[count] }}
      />
      <S.NextButtonWrapper>
        <button onClick={prevBtnClickHandler}>〉</button>
        <button onClick={nextBtnClickHandler} disabled={buttonDisabled}>
          다음
        </button>
      </S.NextButtonWrapper>
    </S.Wrapper>
  );
};

export default Testing;
