import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';

export const ShapeInputWrapper = styled(InputWrapper)`
  flex: 0 0 100%;
  label {
    display: flex;
    padding: 0.5rem 1rem;
    gap: 1rem;
    img {
      border-radius: 50%;
      background: #d9d9d9;
      width: 25%;
      box-sizing: border-box;
      padding: 0.5rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      line-height: 1.5;
      text-align: left;
      word-break: keep-all;
      strong {
        font-size: 1rem;
        font-weight: 400;
        transition: 0.3s;
        color: #5a1de7;
      }
      span {
        font-size: 0.8rem;
        color: #7f7f7f;
      }
    }
  }
`;
