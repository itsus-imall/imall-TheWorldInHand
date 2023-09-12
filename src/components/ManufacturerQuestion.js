import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ManufacturerQuestion = () => {
  const { questions } = useOutletContext();
  return (
    <S.Wrapper>
      {questions.map(({ value }) => {
        return (
          <S.InputWrapper>
            <input
              id={value}
              name='Manufacturer'
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

export default ManufacturerQuestion;
