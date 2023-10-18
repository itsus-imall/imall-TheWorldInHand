import { useMatch, useOutletContext } from 'react-router-dom';
import * as S from './styled';
import { TestWrapper } from '../styled';
import Loading from '../../../components/Loading';
import { useEffect, useState } from 'react';

const HandQuestion = ({ background = 'transparent', imgSrc }) => {
  const brandMatch = useMatch('testing/brand');
  const howImallMatch = useMatch('testing/howImall');
  const [loading, setLoading] = useState(brandMatch ? true : false);
  const { questions, history } = useOutletContext();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (brandMatch && loading) {
    return <Loading count='1' />;
  }

  return (
    <TestWrapper>
      {questions.map(({ value }) => {
        const isValueInHistory = history && history.includes(value);
        return (
          <S.HandInputWrapper
            key={value}
            background={background}
            long={!!howImallMatch}
          >
            <input
              id={value}
              name='hand'
              type='checkbox'
              value={value}
              defaultChecked={isValueInHistory}
            />
            <label htmlFor={value}>
              {howImallMatch ? null : (
                <img
                  src={`/images/테스트페이지/${imgSrc}${value}.png`}
                  alt='hand'
                  onError={e =>
                    (e.target.src = `/images/테스트페이지/없음.png`)
                  }
                />
              )}
              <p>{value}</p>
            </label>
          </S.HandInputWrapper>
        );
      })}
    </TestWrapper>
  );
};

export default HandQuestion;
