import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';

export const ThreeInputWrapper = styled(InputWrapper)`
  flex: 0 0 100%;
  input {
    top: 50%;
    right: auto;
    left: 1rem;
    transform: translate(0%, -50%);
    margin: 0;
  }
`;
