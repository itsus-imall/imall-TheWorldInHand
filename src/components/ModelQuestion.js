import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ModelQuestion = () => {
  const { questions } = useOutletContext();
  console.log('fsd');
  return (
    <S.Wrapper>
      {questions.map(({ value }) => {
        return (
          <S.InputWrapper>
            <input
              id={value}
              name='model'
              key={value}
              type='radio'
              value={value}
            />
            <label htmlFor={value}>
              <img
                src={`/images/테스트페이지/260x260_01_${value}.png`}
                alt='model'
              />
            </label>
          </S.InputWrapper>
        );
      })}
    </S.Wrapper>
  );
};

export default ModelQuestion;
