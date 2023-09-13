import { useOutletContext } from 'react-router-dom';
import * as S from './styled';
import { TestWrapper } from '../styled';

const HandQuestion = () => {
  const { questions, history } = useOutletContext();
  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        const isValueInHistory = history && history.includes(value);
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
    </TestWrapper>
  );
};

export default HandQuestion;
