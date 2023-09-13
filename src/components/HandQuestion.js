import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const HandQuestion = () => {
  const { questions, history } = useOutletContext();
  return (
    <S.Wrapper>
      {questions.map(({ value }) => {
        const isValueInHistory =
          Array.isArray(history) && history.includes(value);
        return (
          <S.HandInputWrapper key={value}>
            <input
              id={value}
              name='hand'
              type='checkbox'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              <img
                src={`/images/테스트페이지/260x260_03_${value}.png`}
                alt='hand'
              />
              <p>{value}</p>
            </label>
          </S.HandInputWrapper>
        );
      })}
    </S.Wrapper>
  );
};

export default HandQuestion;
