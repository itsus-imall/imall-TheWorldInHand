import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import ToggleMenu from '../../../components/ToggleMenu';
import * as S from './styled';
import {
  TestToggleContentWrapper,
  TestToggleViewWrapper,
  TestToggleWrapper,
  ToggleInputWrapper,
} from '../styled';

const inputValues = {
  케이스: [
    {
      value: 'TPU',
      summary: '우수한 복원력',
    },
    {
      value: 'PC',
      summary: '변형률이 낮음',
    },
    {
      value: '가죽',
      summary: '물과 습기에 강함',
    },
    {
      value: '실리콘',
      summary: '구름같이 말랑',
    },
    {
      value: '없음,모르겠음',
    },
  ],
  필름: ['강화유리', '지문방지', '프라이버시', '블루라이트', '없음, 모르겠음'],
};

const NowUse = () => {
  const { questions, history } = useOutletContext();
  const [toggle, setToggle] = useState('0');

  const onClick = event => {
    setTimeout(() => {
      setToggle(event.target.dataset.toggle === '0' ? '1' : '0');
    }, 400);
  };
  return (
    <>
      <ToggleMenu questions={questions} toggle={toggle} setToggle={setToggle} />
      <TestToggleWrapper>
        <TestToggleViewWrapper toggle={toggle}>
          <TestToggleContentWrapper style={{ marginRight: '1rem' }}>
            {inputValues.케이스.map(({ value, summary }) => {
              const isValueInHistory = history && history.includes(value);
              return (
                <S.ToggleInputWrapper key={value}>
                  <input
                    id={value}
                    name='useCase'
                    type='radio'
                    value={value}
                    data-toggle={toggle}
                    defaultChecked={isValueInHistory}
                    onClick={onClick}
                  />
                  <label htmlFor={value}>
                    <p>{value}</p>
                    <span>{summary}</span>
                    <img
                      src={`/images/테스트페이지/${value}.svg`}
                      alt={value}
                      onError={e =>
                        (e.target.src = `/images/테스트페이지/${value}.png`)
                      }
                    />
                  </label>
                </S.ToggleInputWrapper>
              );
            })}
          </TestToggleContentWrapper>
          <TestToggleContentWrapper>
            {inputValues.필름.map(value => {
              const isValueInHistory = history && history.includes(value);
              return (
                <ToggleInputWrapper key={value}>
                  <input
                    id={value}
                    name='useFilm'
                    type='radio'
                    value={value}
                    data-toggle={toggle}
                    defaultChecked={isValueInHistory}
                  />
                  <label htmlFor={value}>
                    <p>{value}</p>
                  </label>
                </ToggleInputWrapper>
              );
            })}
          </TestToggleContentWrapper>
        </TestToggleViewWrapper>
      </TestToggleWrapper>
    </>
  );
};

export default NowUse;
