import { styled } from 'styled-components';
import { Wrapper } from '../Home/styled';

export const TestWrapper = styled(Wrapper)`
  justify-content: flex-start;
  padding-bottom: calc(var(--wrapper-padding) + 70px);
`;

export const QuestionTitleWrapper = styled.div``;

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
  button {
    border: 0;
    padding: 0;
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
  button:last-child:disabled {
    background: #e9ecef;
    color: #ced4da;
    border-radius: var(--font-size-big);
    flex: 0 0 80%;
  }
`;
