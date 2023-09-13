import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 1rem);
  text-align: left;
  h2 p {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
  }
  & > p {
    font-size: var(--font-size-sm);
    line-height: 2;
  }
`;
