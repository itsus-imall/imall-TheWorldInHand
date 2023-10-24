import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 44px;
  left: 0;
  background: var(--background-color);
  width: 100%;
  height: calc(100% - 50px);
  z-index: 99;
  padding: var(--wrapper-padding);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  gap: 1rem;
  img {
    width: 50%;
  }
  p {
    font-size: 1rem;
    color: #fff;
  }
`;
