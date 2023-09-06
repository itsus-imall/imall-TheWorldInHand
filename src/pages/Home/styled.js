import { styled } from 'styled-components';

export const Wrapper = styled.section`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  color: var(--text-color);
  box-sizing: border-box;
  padding: var(--wrapper-padding);
  img {
    width: 100%;
  }
  .title-img {
    width: auto;
  }
  img:not(.title-img) {
    animation: drawCircle 5s linear infinite;
  }
  @keyframes drawCircle {
    0% {
      transform: translateX(0) translateY(0);
    }
    25% {
      transform: translateX(5px) translateY(5px);
    }
    50% {
      transform: translateX(10px) translateY(0);
    }
    75% {
      transform: translateX(5px) translateY(-5px);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: var(--font-size-big);
  }
  h3 {
    font-size: var(--font-size-sm);
    color: var(--text-color-purple);
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: var(--font-size-md);
    font-weight: 500;
  }
  p {
    font-size: var(--font-size-sm);
    color: var(--text-color-purple);
    span {
      text-decoration: underline;
    }
  }
  button,
  a {
    background: var(--point-color);
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    display: block;
    padding: var(--wrapper-padding);
    border-radius: var(--wrapper-padding);
  }
`;
