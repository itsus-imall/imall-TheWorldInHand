import styled from 'styled-components';
import { TestWrapper } from '../styled';

export const QuantityWrapper = styled(TestWrapper)`
  justify-content: space-around;
  margin-top: 3rem;
  & > div {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 100px;
    div {
      position: relative;
      &::after {
        content: '개';
        position: absolute;
        right: 5px;
        color: #000;
        top: 50%;
        transform: translate(-50%, -80%);
        font-size: 0.7rem;
      }
      input {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        text-align: right;
        padding: 0.7rem 1.5rem 1rem 1rem;
        border-radius: 10px;
        border: 0;
        transition: border 0.3s;
        outline: none;
      }
      &.overflow input {
        border: 3px solid red;
      }
      &.overflow::before {
        content: '999개 이하로 입력해 주세요.';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 120%);
        color: #000;
        z-index: 2;
        color: red;
        font-size: 0.7rem;
        line-height: 1.2;
      }
    }
  }
`;
