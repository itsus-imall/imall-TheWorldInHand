import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ManufacturerQuestion = () => {
  const { questions, history } = useOutletContext();

  return (
    <S.Wrapper>
      {questions.map(({ value }) => {
        const isValueInHistory =
          Array.isArray(history) && history.includes(value);
        return (
          <S.InputWrapper key={value}>
            <input
              id={value}
              name='manufacturer'
              type='radio'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              <img
                src={`/images/테스트페이지/260x260_01_${value}.png`}
                alt='manufacturer'
              />
            </label>
          </S.InputWrapper>
        );
      })}
    </S.Wrapper>
  );
};

export default ManufacturerQuestion;
