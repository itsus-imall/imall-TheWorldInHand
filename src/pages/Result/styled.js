import styled from 'styled-components';

export const ResultWrapper = styled.section`
  width: 100%;
  overflow-y: scroll;
  background: #fff;
  color: #000;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 15px;
  .title-wrapper {
    text-align: center;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      background: var(--background-color);
      display: inline-block;
      color: #fff;
      border-radius: 10px;
      padding: 0.5rem 1rem;
    }
  }
`;

export const ProductWrapper = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      flex: 0 0 calc(50% - 10px);
    }
  }
`;
