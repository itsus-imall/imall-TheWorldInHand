import { useQuery } from 'react-query';
import { getQuestion } from '../../services/apis';

import * as S from './styled';

import Progress from '../../components/Progress';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import Title from '../../components/Title';

const a = [
  {
    contents: {
      title: '사용하는 제품을 선택해 주세요.',
    },
    questions: [{ value: '삼성' }, { value: '애플' }],
  },
  {
    contents: {
      title: '상세 기종을 선택해 주세요.',
    },
    questions: [{ value: '삼성' }, { value: '애플' }],
  },
];

const questionReducer = (state, action) => {
  let questions = null;
  switch (action.type) {
    case 'DATA_FETCH':
      return { ...state, data: action.payload };
    case 'NEXT':
      if ([0, 1, 4].includes(state.count)) {
        questions = filter(
          state.data,
          action.payload,
          state.count === 4 ? true : false,
        );
      }
      return {
        ...state,
        history: [...state.history, action.payload],
        count: ++state.count,
        values: {
          contents: a[state.count].contents,
          questions: questions ?? a[state.count].questions,
        },
      };
    default:
      return;
  }
};

const initalState = {
  count: 0,
  data: null,
  values: a[0],
  history: [],
};

const filter = (datas, payload, type) => {
  if (!type) {
    const keys = Object.keys(datas[payload]).reverse();
    const newArray = keys.map(key => {
      return { value: key };
    });
    return newArray;
  }
};

const Testing = () => {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { isLoading, data } = useQuery(['question'], getQuestion);
  const [{ count, values }, dispatch] = useReducer(
    questionReducer,
    initalState,
  );
  console.log(values);
  useEffect(() => {
    if (isLoading) return;
    dispatch({ type: 'DATA_FETCH', payload: data });
  }, [data, isLoading]);

  const nextBtnClickHandler = () => {
    dispatch({ type: 'NEXT', payload: selectedQuestion });
    setButtonDisabled(true);
    navigate('model');
    setSelectedQuestion([]);
  };

  const prevBtnClickHandler = () => {
    navigate(-1);
  };

  return (
    <S.TestWrapper>
      <Progress count={{ count }} />
      <Title contents={values.contents} />
      <Outlet
        context={{
          questions: values.questions,
          setButtonDisabled,
          setSelectedQuestion,
        }}
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
