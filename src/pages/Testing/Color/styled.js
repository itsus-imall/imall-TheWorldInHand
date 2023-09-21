import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';
import { TestToggleViewWrapper } from '../styled';

export const ColorInputWrapper = styled(InputWrapper)`
  label {
    padding: 1rem;
  }
  .colorLayout {
    width: 100%;
    height: 50px;
    background: ${props => props.color};
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .colorWrapper {
    display: flex;
  }
`;

export const ColorLayout = styled.div`
  width: 100%;
  height: 120px;
  background: ${props => props.color};
  border-radius: 10px;
`;

export const ColorToggleViewWrapper = styled(TestToggleViewWrapper)`
  align-items: flex-start;
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
`;
