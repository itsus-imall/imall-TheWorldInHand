import { useOutletContext } from 'react-router-dom';
import * as S from './styled';

const ModelQuestion = () => {
  const { questions, history } = useOutletContext();
  return (
    <S.ModelWrapper>
      <S.ModelImgWrapper>
        <img
          src={`/images/테스트페이지/260x260_01_${
            questions[0].value.includes('갤럭시') ? '삼성' : '애플'
          }.png`}
          alt='model'
        />
        <p>1가지만 선택해 주세요</p>
      </S.ModelImgWrapper>
      {questions.map(({ value }) => {
        const isValueInHistory =
          Array.isArray(history) && history.includes(value);
        return (
          <S.ModelInputWrapper key={value}>
            <input
              id={value}
              name='model'
              type='radio'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>{value}</label>
          </S.ModelInputWrapper>
        );
      })}
    </S.ModelWrapper>
  );
};

export default ModelQuestion;
