import { historyFilter, newDataFilter } from '../utils/filter';

const questionsObj = [
  {
    contents: {
      title: '사용하는 제품을\n선택해 주세요.',
    },
    questions: [{ value: '삼성' }, { value: '애플' }],
    nextURL: 'model',
  },
  {
    contents: {
      title: '상세 기종을\n선택해 주세요.',
    },
    nextURL: 'hand-shape',
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
      title: '손에 집중하시고\n답변해 주세요',
      subTitle: '양손잡이의 경우 중복 선택해 주세요.',
    },
    questions: [
      {
        value: '왼손잡이',
      },
      {
        value: '오른손잡이',
      },
    ],
    nextURL: 'now-use',
  },
  {
    contents: {
      title: '현재 사용하시는\n소재를 선택해 주세요.',
      subTitle: '한 가지만 선택해 주세요.',
    },
    questions: [
      {
        value: '케이스',
      },
      {
        value: '필름',
      },
    ],
    nextURL: '/',
  },
];

export const initalState = {
  count: 0,
  data: null,
  values: questionsObj[0],
  history: [],
};

export const questionReducer = (state, action) => {
  let questions = null;
  switch (action.type) {
    case 'DATA_FETCH':
      return { ...state, data: action.payload };
    case 'NEXT':
      if ([0, 4].includes(state.count)) {
        questions = newDataFilter(state.data, action.payload);
      }
      const history = historyFilter(state.history, state.count, action.payload);
      return {
        ...state,
        history,
        count: ++state.count,
        values: {
          ...questionsObj[state.count],
          questions: questions ?? questionsObj[state.count].questions,
        },
      };
    case 'PREV':
      if ([2].includes(state.count)) {
        questions = newDataFilter(state.data, state.history[state.count - 2]);
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