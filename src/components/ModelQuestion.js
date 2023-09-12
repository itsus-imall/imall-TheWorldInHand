import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ModelQuestion = () => {
  const { questions } = useOutletContext();
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
        return (
          <S.ModelInputWrapper key={value}>
            <input id={value} name='model' type='radio' value={value} />
            <label htmlFor={value}>{value}</label>
          </S.ModelInputWrapper>
        );
      })}
    </S.ModelWrapper>
  );
};

export default ModelQuestion;
