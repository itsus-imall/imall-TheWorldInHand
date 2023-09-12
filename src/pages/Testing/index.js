import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';

import Progress from '../../components/Progress';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import Title from '../../components/Title';

const questionsObj = [
  {
    contents: {
      title: '사용하는 제품을 선택해 주세요.',
    },
    questions: [{ value: '삼성' }, { value: '애플' }],
    nextURL: 'model',
  },
  {
    contents: {
      title: '상세 기종을 선택해 주세요.',
    },
    nextURL: 'handShape',
  },
];

const questionReducer = (state, action) => {
  let questions = null;
  switch (action.type) {
    case 'DATA_FETCH':
      return { ...state, data: action.payload };
    case 'NEXT':
      if ([0, 1, 4].includes(state.count)) {
        questions = filter(state.data, action.payload);
      }
      const history = historyFilter(state.history[state.count], action.payload);
      return {
        ...state,
        history: history ?? [...state.history, action.payload],
        count: ++state.count,
        values: {
          ...state.values,
          contents: questionsObj[state.count].contents,
          questions: questions ?? questionsObj[state.count].questions,
        },
      };
    case 'PREV':
      return {
        ...state,
        count: --state.count,
        values: {
          ...questionsObj[state.count],
        },
      };
    default:
      return;
  }
};

const historyFilter = (history, payload) =>
  (history = history ? [payload] : undefined);

const initalState = {
  count: 0,
  data: null,
  values: questionsObj[0],
  history: [],
};

const filter = (datas, payload) => {
  let newArray = [];
  payload.forEach(element => {
    const keys = Object.keys(datas[element]).map(key => {
      return { value: key };
    });
    newArray = [...keys];
  });
  return newArray;
};

const Testing = () => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { isLoading, data } = useQuery(['question'], getQuestion, {
    staleTime: Infinity,
  });
  const [{ count, values, history }, dispatch] = useReducer(
    questionReducer,
    initalState,
  );
  useEffect(() => {
    if (isLoading) return;
    dispatch({ type: 'DATA_FETCH', payload: data });
  }, [data, isLoading]);

  const nextBtnClickHandler = () => {
    const inputs = Array.from(document.querySelectorAll('input'));
    const checkedInputs = inputs
      .filter(input => input.checked)
      .map(input => input.value);
    dispatch({ type: 'NEXT', payload: checkedInputs });
    setButtonDisabled(true);
    navigate(values.nextURL);
  };

  const prevBtnClickHandler = event => {
    event.preventDefault();
    dispatch({ type: 'PREV' });
    setButtonDisabled(false);
    navigate(-1);
  };
  const inputCheckedHandler = () => setButtonDisabled(false);
  console.log(history);
  return (
    <S.TestWrapper as={'form'} onChange={inputCheckedHandler}>
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
    </S.TestWrapper>
  );
};

export default Testing;
