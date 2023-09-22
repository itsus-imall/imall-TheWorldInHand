import { historyFilter, newDataFilter } from '../utils/filter';

const questionsObj = [
  {
    contents: {
      title: '사용하는 제품을\n선택해 주세요.',
    },
    questions: [{ value: '삼성' }, { value: '애플' }],
    nextURL: 'model',
    nextChecked: 1,
  },
  {
    contents: {
      title: '상세 기종을\n선택해 주세요.',
    },
    nextURL: 'hand-shape',
    nextChecked: 1,
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
    nextChecked: 1,
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
    nextChecked: -1,
  },
  {
    contents: {
      title: '현재 사용하시는\n소재를 선택해 주세요.',
      subTitle: '한 가지씩 선택해 주세요.',
    },
    questions: [
      {
        value: '케이스',
      },
      {
        value: '필름',
      },
    ],
    nextURL: 'three',
    nextChecked: 2,
  },
  {
    contents: {
      title: '휴대폰 액세서리,\n어떤 점에 구매하시나요?',
      subTitle: '세 가지 선택해주세요',
    },
    questions: [
      {
        value: '소재',
      },
      {
        value: '색상',
      },
      {
        value: '가격',
      },
      {
        value: '두께',
      },
      {
        value: '보호력',
      },
    ],
    nextURL: null,
    nextChecked: 3,
    filter: true,
  },
  {
    contents: {
      title: 'test',
      subTitle: 'test',
    },
    questions: [
      {
        value: '1',
      },
    ],
    nextURL: null,
    nextChecked: 3,
  },
];

const threeQuestionObj = {
  소재: {
    contents: {
      title: '평소 휴대폰을 이용하셨을 때\n어떤 점이 불편하신가요?',
      subTitle: '한 가지씩 선택해 주세요',
    },
    questions: [
      {
        value: '케이스',
      },
      {
        value: '필름',
      },
    ],
    nextChecked: 2,
    filter: true,
  },
  색상: {
    contents: {
      title: '선호하는 색상을\n골라주세요',
      subTitle: '모두 선택해 주세요.',
    },
    questions: [
      { value: '블랙' },
      { value: '투명' },
      { value: '회색' },
      { value: '보라색' },
      { value: '파란색' },
      { value: '노란색' },
      { value: '녹색' },
      { value: '자주색' },
    ],
    nextChecked: -1,
    filter: true,
  },
  가격: {
    contents: {
      title: '선호하는 가격대를\n골라주세요!',
      subTitle: '한 가지만 선택해 주세요.',
    },
    questions: [
      { value: '1만원대 이하' },
      { value: '1만원대 이상' },
      { value: '2만원대 이상' },
    ],
    nextChecked: 1,
    filter: true,
  },
  두께: {
    contents: {
      title: '내가 선호하는\n두께를 선택해 주세요',
      subTitle: '한 가지만 선택해 주세요.',
    },
    questions: [
      { value: '뛰어난 내구성과 충격완화가 장점인 소재' },
      { value: '얇은 두께로 슬림한 소재' },
      { value: '풀커버 보호로 높은 충격에도 강한 소재' },
      { value: '지문 방지가 되는 매트한 소재' },
    ],
    nextChecked: 2,
    filter: true,
  },
  보호력: {
    contents: {
      title: '사용하고 싶은\n필름을 선택해 주세요',
      subTitle: '한 가지씩 선택해 주세요.',
    },
    questions: [
      { value: '스크래치 방지' },
      { value: '지문 방지' },
      { value: '프라이버시' },
      { value: '우수한 화질' },
      { value: '카메라 보호' },
    ],
    nextChecked: 1,
    filter: true,
  },
};

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
      if ([0].includes(state.count)) {
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
    case 'FILTER':
      threeQuestionFilter(action.payload, state.history);
      return { ...state };
    default:
      return;
  }
};

const threeQuestionFilter = (payload, history) => {
  let startIndex = 6;
  history[startIndex - 1] && questionsObj.splice(startIndex, 3);
  payload.forEach((content, index) => {
    const copyObj = { ...threeQuestionObj[content] };
    delete copyObj.filter;
    copyObj.nextURL = index === 2 ? 'brand' : `three/${payload[index + 1]}`;
    questionsObj.splice(startIndex + index, 0, copyObj);
  });
  console.log(questionsObj);
};
