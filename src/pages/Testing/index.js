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
  {
    contents: {
      title: '손 모양 유형 찾기',
      subTitle: '테스트 진행중이신 지금의 모습을 선택해 주세요!',
    },
    questions: [
      {
        value: '한 손가락으로 터치형',
        summary: '터치하는 손가락은 관계 없어요.',
      },
      {
        value: '휴대폰 소중해형',
        summary: '꼬옥 잡고 있어요.',
      },
      {
        value: '막내손가락으로 휴대폰 받칠거형',
        summary: '왼손/오른손 관계 없어요.',
      },
      {
        value: '한 손으로 꽉 잡을거형',
        summary: '놓치지 않을거예요.',
      },
    ],
    nextURL: 'hand',
  },
  {
    contents: {
      title: '손 모양 유형 찾기2',
      subTitle: '테스트 진행중이신 지금의 모습을 선택해 주세요!',
    },
    questions: [
      {
        value: '한 손가락으로 터치형2',
        summary: '터치하는 손가락은 관계 없어요.',
      },
      {
        value: '휴대폰 소중해형2',
        summary: '꼬옥 잡고 있어요.',
      },
      {
        value: '막내손가락으로 휴대폰 받칠거형2',
        summary: '왼손/오른손 관계 없어요.',
      },
      {
        value: '한 손으로 꽉 잡을거형2',
        summary: '놓치지 않을거예요.',
      },
    ],
    nextURL: '/',
  },
];

const questionReducer = (state, action) => {
  let questions = null;
  switch (action.type) {
    case 'DATA_FETCH':
      return { ...state, data: action.payload };
    case 'NEXT':
      if ([0, 4].includes(state.count)) {
        questions = filter(state.data, action.payload);
      }
      const history = historyFilter(state.history[state.count], action.payload);
      return {
        ...state,
        history: history ?? [...state.history, action.payload],
        count: ++state.count,
        values: {
          ...questionsObj[state.count],
          questions: questions ?? questionsObj[state.count].questions,
        },
      };
    case 'PREV':
      if ([2].includes(state.count)) {
        questions = filter(state.data, state.history[state.count - 2]);
      }
      return {
        ...state,
        count: --state.count,
        values: {
          ...questionsObj[state.count],
          questions: questions ?? questionsObj[state.count].questions,
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
    console.log(values);
    navigate(values.nextURL);
  };

  const prevBtnClickHandler = event => {
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
  };

  const inputCheckedHandler = () => setButtonDisabled(false);

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
