import { useOutletContext } from 'react-router-dom';
import * as S from './styled';
import { TestWrapper } from '../styled';

const inputValues = {
  블랙: ['#000', '#000', '#000'],
  투명: ['#ccffff', '#ccffff', '#ccffff'],
  회색: ['#d9d9d9', '#a6a6a6', '#7f7f7f'],
  보라색: ['#f4d9f7', '#9866d0', '#7030a0'],
  파란색: ['#fff', '#dae3f3', '#2f5597'],
  노란색: ['#fff2cc', '#ffe699', '#f9cbad'],
  녹색: ['#e2f0d9', '#a9d18e', '#385723'],
  자주색: ['#f0cac9', '#dc8280', '#863b26'],
};

const Color = () => {
  const { questions, history } = useOutletContext();
  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        const isValueInHistory = history && history.includes(value);
        return (
          <S.ColorInputWrapper key={value}>
            <input
              id={value}
              name='color'
              type='checkbox'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              <S.ColorLayout color={inputValues[value]} />
              <p>{value}</p>
            </label>
          </S.ColorInputWrapper>
        );
      })}
    </TestWrapper>
  );
};

export default Color;
