import { memo, useEffect, useReducer, useState } from 'react';
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

  const nextBtnClickHandler = () => {
    if (values.filter)
      dispatch({ type: 'FILTER', payload: checkedInputValues });
    dispatch({ type: 'NEXT', payload: checkedInputValues });
    setButtonDisabled(true);
    setCheckedInputValues([]);
    navigate(values.filter ? `three/${checkedInputValues[0]}` : values.nextURL);
  };

  const prevBtnClickHandler = event => {
    event.preventDefault();
    if (count !== 0) dispatch({ type: 'PREV' });
    else {
      if (
        !window.confirm(
          '뒤로가시면 다시 시작하셔야 합니다.\n정말 나가시겠습니까?',
        )
      )
        return;
    }
    setCheckedInputValues([]);
    navigate(-1);
  };

  const buttonDisabledHandler = event => {
    const {
      value,
      checked,
      dataset: { toggle },
    } = event.target;
    const { nextChecked } = values;
    setCheckedInputValues(prev => {
      const oldArray = [...prev];
      const toggleIndex = toggle ? oldArray.indexOf(toggle) : -1;
      const valueIndex = oldArray.indexOf(value);

      if (nextChecked === 1) {
        setButtonDisabled(false);
        return [value];
      }

      if (checked) {
        if (toggleIndex !== -1) oldArray[toggleIndex] = value;
        else if (oldArray.length === nextChecked) oldArray.shift();
        oldArray.push(value);
      } else if (valueIndex !== -1) {
        oldArray.splice(valueIndex, 1);
      }

      const isButtonDisabled =
        nextChecked === -1
          ? oldArray.length === 0
          : oldArray.length !== nextChecked;

      setButtonDisabled(isButtonDisabled);
      return [...oldArray];
    });
  };

  useEffect(() => {
    if (isLoading) return;
    console.log(isLoading);
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
        context={{
          questions: values.questions,
          history: history[count],
          checkedInputValues,
        }}
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
