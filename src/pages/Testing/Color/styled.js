import styled from 'styled-components';
import { InputWrapper } from '../Manufacturer/styled';

export const ColorInputWrapper = styled(InputWrapper)`
  label {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ColorLayout = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(
    to right,
    ${props => props.color?.join(',') ?? 'transparent'}
  );
  border-radius: 10px;
`;
