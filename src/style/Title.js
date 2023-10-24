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
    font-size: 0.8rem;
    line-height: 2;
  }
`;
