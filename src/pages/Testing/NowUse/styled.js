import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';

export const ToggleInputWrapper = styled(InputWrapper)`
  label {
    padding: 1rem 1rem 3rem 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: left;
    gap: 1rem;
    img {
      width: 25%;
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  }
`;
