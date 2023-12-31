import { memo, useEffect, useReducer, useState } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { getQuestion } from '../../services/apis';

import * as S from './styled';

import Progress from '../../components/Progress';
import Title from '../../components/Title';
import { initalState, questionReducer } from '../../reducer/reducer';

const Testing = memo(({ userInfo, setQuestionResult }) => {
  const navigate = useNavigate();
  const quantityMatch = useMatch('testing/quantity');
  const howImallMatch = useMatch('testing/howImall');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkedInputValues, setCheckedInputValues] = useState([]);
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
    navigate(
      values.filter ? `three/${checkedInputValues[0]}` : values.nextURL,
      howImallMatch ? { state: [...history, checkedInputValues] } : {},
    );
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

  const inputCheckedHandler = event => {
    const {
      value,
      checked,
      dataset: { toggle = -1 },
    } = event.target;
    const { nextChecked } = values;
    setCheckedInputValues(prev => {
      const oldArray = [...prev];
      const valueIndex = oldArray.indexOf(value);

      if (nextChecked === 1) {
        setButtonDisabled(false);
        return [value];
      }

      if (checked) {
        if (toggle !== -1) oldArray[toggle] = value;
        else {
          oldArray.push(value);
          if (nextChecked !== -1 && oldArray.length > nextChecked)
            oldArray.shift();
        }
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

  const inputNumberHandler = event => {
    const { name, value } = event.target;
    setCheckedInputValues(prev => {
      const index = name === '케이스' ? 0 : 1;
      const newArray = [...prev];
      newArray.splice(index, 1, value);
      if (
        !newArray[0] ||
        !newArray[1] ||
        newArray[0].length > 3 ||
        newArray[1].length > 3
      )
        setButtonDisabled(true);
      else setButtonDisabled(false);
      return newArray;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestion();
      dispatch({ type: 'DATA_FETCH', payload: data });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!history[count]) return;
    setButtonDisabled(false);
    setCheckedInputValues([...history[count]]);
  }, [count, history]);

  return (
    <S.Wrapper
      as={'form'}
      onChange={quantityMatch ? inputNumberHandler : inputCheckedHandler}
    >
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
