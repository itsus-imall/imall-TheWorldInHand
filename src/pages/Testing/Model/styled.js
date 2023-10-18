import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';
import { TestWrapper } from '../styled';

export const ModelWrapper = styled(TestWrapper)`
  width: calc(100% - 3.5rem);
  border-radius: 15px;
  padding: var(--wrapper-padding);
  background: #fff;
  gap: 0.5rem;
  position: relative;
  padding-top: 0.5rem;
`;

export const ModelImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 30%;
    flex: 0 0 10%;
  }
  p {
    flex: 0 0 65%;
    background: var(--input-checked-border-color);
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    font-weight: bold;
    position: relative;
  }
  p:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: var(--input-checked-border-color);
    border-left: 0;
    border-top: 0;
    margin-top: -7px;
    margin-left: -8px;
  }
`;

export const ModelInputWrapper = styled(InputWrapper)`
  flex: 1 auto;
  label {
    font-size: var(--font-size-sm);
    padding: 0.53rem 0.7rem;
    background: #f2f2f2;
    border: 2px solid #f2f2f2;
    border-radius: var(--font-size-sm);
  }
  input:checked {
    display: none;
  }
  input:checked + label {
    font-weight: bold;
    background: var(--input-checked-bg-color);
    border: 2px solid var(--input-checked-border-color);
  }
`;
