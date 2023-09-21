import { useOutletContext } from 'react-router-dom';
import * as S from './styled';
import { TestWrapper } from '../styled';
import { memo } from 'react';

const ManufacturerQuestion = memo(() => {
  const { questions, history } = useOutletContext();
  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        const isValueInHistory = history && history.includes(value);
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
    </TestWrapper>
  );
});

export default ManufacturerQuestion;
