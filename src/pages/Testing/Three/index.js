import { useOutletContext } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';

import * as S from './styled';
import { TestWrapper } from '../styled';

const Three = () => {
  const { questions, history, checkedInputValues } = useOutletContext();
  const [loading, setLoading] = useState(true);
  console.log(checkedInputValues);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading count='0' />;

  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        console.log(checkedInputValues);
        const isValueInHistory = history && history.includes(value);
        return (
          <S.ThreeInputWrapper key={value}>
            <input
              id={value}
              name='three'
              type='checkbox'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              <div>
                <p>{value}</p>
              </div>
            </label>
          </S.ThreeInputWrapper>
        );
      })}
    </TestWrapper>
  );
};

export default Three;
