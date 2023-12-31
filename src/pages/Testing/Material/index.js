import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';

import ToggleMenu from '../../../components/ToggleMenu';
import {
  TestToggleContentWrapper,
  TestToggleViewWrapper,
  TestToggleWrapper,
  ToggleInputWrapper,
} from '../styled';

const inputValuesObj = {
  소재: [
    [
      '무거운 게 불편해요',
      '튼튼하지 않은 것 같아요',
      '금방 누래져요',
      '지문이 쉽게 묻어요',
    ],
    [
      '너무 두꺼워요',
      '지문이 너무 묻어요',
      '필름이 연약해요',
      '풀커버였으면 좋겠어요',
    ],
  ],
  보호력: [
    ['스크래치 방지', '지문 방지', '프라이버시', '우수한 화질', '카메라 보호'],
    ['자주 떨어트린다', '드물다'],
  ],
};

const Material = ({ type }) => {
  const { questions, history } = useOutletContext();
  const [toggle, setToggle] = useState('0');

  const onClick = event => {
    setTimeout(() => {
      setToggle(event.target.dataset.toggle === '0' ? '1' : '0');
    }, 400);
  };

  useEffect(() => setToggle('0'), [type]);
  const inputValues = inputValuesObj[type];
  return (
    <>
      <ToggleMenu questions={questions} toggle={toggle} setToggle={setToggle} />
      <TestToggleWrapper>
        <TestToggleViewWrapper toggle={toggle}>
          <TestToggleContentWrapper style={{ marginRight: '1rem' }}>
            {inputValues[0].map(value => {
              const isValueInHistory = history && history.includes(value);
              return (
                <ToggleInputWrapper key={value}>
                  <input
                    id={value}
                    name='materialCase'
                    type='radio'
                    value={value}
                    data-toggle={toggle}
                    defaultChecked={isValueInHistory}
                    onClick={onClick}
                  />
                  <label htmlFor={value}>
                    <p>{value}</p>
                  </label>
                </ToggleInputWrapper>
              );
            })}
          </TestToggleContentWrapper>
          <TestToggleContentWrapper>
            {inputValues[1].map(value => {
              const isValueInHistory = history && history.includes(value);
              return (
                <ToggleInputWrapper key={value}>
                  <input
                    id={value}
                    name='materialFilm'
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

export default Material;
