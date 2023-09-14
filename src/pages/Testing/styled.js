import { styled } from 'styled-components';
import { Wrapper as HomeWrapper } from '../Home/styled';

export const Wrapper = styled(HomeWrapper)`
  justify-content: flex-start;
  padding-bottom: calc(var(--wrapper-padding) + 70px);
  gap: 2rem;
`;

export const NextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 50%;
  box-sizing: border-box;
  padding: 0 var(--wrapper-padding);
  transform: translate(-50%, 0);
  button:active {
    transform: scale(0.98);
  }
  button {
    cursor: pointer;
    border: 0;
    padding: 0;
    transition: 0.3s;
    font-size: 1rem;
  }
  button:first-child {
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    transform: rotate(180deg);
    font-weight: 900;
    font-size: var(--font-size-md);
  }
  button:last-child {
    background: var(--point-color);
  }
  button:last-child {
    border-radius: var(--font-size-big);
    flex: 0 0 calc(100% - 60px);
    background: var(--point-color);
    color: #fff;
    font-weight: bold;
  }
  button:last-child:disabled {
    background: #e9ecef;
    color: #ced4da;
  }
`;

export const TestWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  max-width: 500px;
  overflow: scroll;
  gap: 1rem;
`;

export const TestToggleWrapper = styled(TestWrapper)`
  justify-content: center;
`;
