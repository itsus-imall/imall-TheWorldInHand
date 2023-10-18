import { useOutletContext } from 'react-router-dom';
import * as S from './styled';
import { TestWrapper } from '../styled';

const HandShapeQuestion = () => {
  const { questions, history } = useOutletContext();
  return (
    <TestWrapper>
      {questions.map(({ value, summary }, index) => {
        const isValueInHistory = history && history.includes(value);
        return (
          <S.ShapeInputWrapper key={value}>
            <input
              id={value}
              name='model'
              type='radio'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              <img
                src={`/images/테스트페이지/260x260_02_손모양${index}.png`}
                alt='손모양'
              />
              <div>
                <strong>{value}</strong>
                <span>{summary}</span>
              </div>
            </label>
          </S.ShapeInputWrapper>
        );
      })}
    </TestWrapper>
  );
};

export default HandShapeQuestion;
