import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import Loading from '../../../components/Loading';

import * as S from './styled';
import { TestWrapper } from '../styled';

const Three = ({ type = 'radio' }) => {
  const { questions, history, checkedInputValues } = useOutletContext();
  const [loading, setLoading] = useState(type === 'three' ? true : false);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (type !== 'three') return;
    const timeout = setTimeout(() => setLoading(false), 3000);
    history && setChecked(history);
    return () => clearTimeout(timeout);
  }, [history, type]);

  useEffect(() => {
    setChecked(checkedInputValues);
  }, [checkedInputValues]);

  if (loading) return <Loading count='0' />;

  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        return (
          <S.ThreeInputWrapper key={value}>
            <input
              id={value}
              name='three'
              type={type === 'three' ? 'checkbox' : 'radio'}
              value={value}
              checked={checked.includes(value)}
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
