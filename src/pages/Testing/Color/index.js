import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import ToggleMenu from '../../../components/ToggleMenu';
import { TestToggleContentWrapper, TestToggleWrapper } from '../styled';

import * as S from './styled';

const inputValues = {
  기본색상: ['블랙', '투명'],
  추가색상: [
    ['#d9d9d9', '#a6a6a6', '#7f7f7f'],
    ['#f4d9f7', '#9866d0', '#7030a0'],
    ['#fff', '#dae3f3', '#2f5597'],
    ['#fff2cc', '#ffe699', '#f9cbad'],
    ['#e2f0d9', '#a9d18e', '#385723'],
    ['#f0cac9', '#dc8280', '#863b26'],
  ],
};

const Color = () => {
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
        <S.ColorToggleViewWrapper toggle={toggle}>
          <TestToggleContentWrapper style={{ marginRight: '1rem' }}>
            <h2>1. 기본 색상 한 가지만 선택해 주세요.</h2>
            {inputValues.기본색상.map(value => {
              const isValueInHistory = history && history.includes(value);
              return (
                <S.ColorInputWrapper
                  key={value}
                  color={value === '블랙' ? '#000' : '#ccffff'}
                >
                  <input
                    id={value}
                    name='bacicColor'
                    type='radio'
                    value={value}
                    data-toggle={toggle}
                    defaultChecked={isValueInHistory}
                    onClick={onClick}
                  />
                  <label htmlFor={value}>
                    <div className='colorLayout' />
                    <p>{value}</p>
                  </label>
                </S.ColorInputWrapper>
              );
            })}
          </TestToggleContentWrapper>
          <TestToggleContentWrapper>
            <h2>2. 추가 색상 모두 선택해 주세요.</h2>
            {inputValues.추가색상.map(value => {
              const isValueInHistory =
                history && history.includes(value.join(','));
              return (
                <S.ColorInputWrapper key={value}>
                  <input
                    id={value}
                    name='addColor'
                    type='checkbox'
                    value={value}
                    data-toggle={toggle}
                    defaultChecked={isValueInHistory}
                  />
                  <label htmlFor={value}>
                    <div className='colorWrapper'>
                      {value.map(color => (
                        <S.ColorLayout color={color} />
                      ))}
                    </div>
                  </label>
                </S.ColorInputWrapper>
              );
            })}
          </TestToggleContentWrapper>
        </S.ColorToggleViewWrapper>
      </TestToggleWrapper>
    </>
  );
};

export default Color;
