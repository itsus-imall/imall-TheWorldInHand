import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';

export const HandInputWrapper = styled(InputWrapper)`
  flex: ${props => (props.long ? '0 0 100%' : '0 0 calc(50% - 1rem / 2)')};
  label {
    padding: 1rem;
    p {
      font-size: 1rem;
      text-transform: uppercase;
    }
    img {
      box-sizing: border-box;
      padding: 1rem;
      background: ${props => props.background};
      border-radius: ${props =>
        props.background === 'transparent' ? 0 : '50%'};
      width: 80%;
      margin-bottom: 0.5rem;
    }
  }
`;
