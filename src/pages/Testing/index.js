import { memo, useCallback, useEffect, useReducer, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';

import Progress from '../../components/Progress';
import Title from '../../components/Title';
import { initalState, questionReducer } from '../../reducer/reducer';

const Testing = memo(({ userInfo }) => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkedInputValues, setCheckedInputValues] = useState([]);
  const { isLoading, data } = useQuery(['question'], getQuestion);
  const [{ count, values, history }, dispatch] = useReducer(
    questionReducer,
    initalState,
  );
  if (!userInfo) navigate('/');

  const nextBtnClickHandler = useCallback(() => {
    dispatch({ type: 'NEXT', payload: checkedInputValues });
    setButtonDisabled(true);
    setCheckedInputValues([]);
    navigate(values.nextURL);
  }, [navigate, values.nextURL, checkedInputValues]);

  const prevBtnClickHandler = useCallback(
    event => {
      event.preventDefault();
      setCheckedInputValues([]);
      if (count !== 0) {
        dispatch({ type: 'PREV' });
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

  const buttonDisabledHandler = event => {
    const {
      value,
      checked,
      dataset: { toggle },
    } = event.target;
    const { nextChecked } = values;
    setCheckedInputValues(prev => {
      if (nextChecked === 1) {
        setButtonDisabled(false);
        return [value];
      }
      const oldArray = [...prev];
      if (checked) {
        oldArray.splice(
          toggle ?? oldArray.indexOf(value),
          oldArray.length === nextChecked ? 1 : 0,
          value,
        );
      } else {
        oldArray.splice(oldArray.indexOf(value), 1);
      }
      setButtonDisabled(
        nextChecked === -1
          ? oldArray.length === 0
          : oldArray.length !== nextChecked,
      );
      return [...oldArray];
    });
  };

  useEffect(() => {
    if (isLoading) return;
    dispatch({ type: 'DATA_FETCH', payload: data });
  }, [data, isLoading]);

  useEffect(() => {
    if (!history[count]) return;
    setButtonDisabled(false);
    setCheckedInputValues([...history[count]]);
  }, [count, history]);

  return (
    <S.Wrapper as={'form'} onChange={buttonDisabledHandler}>
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
});

export default Testing;
