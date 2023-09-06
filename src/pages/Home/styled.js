import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 44px;
  height: calc(var(--vh, 1vh) * 100 - 44px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--vh, 1vh) * 1.5);
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
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--vh, 1vh) * 1.5);
  h2 {
    font-size: var(--font-size-big);
  }
  h3 {
    font-size: var(--font-size-sm);
    color: var(--text-color-purple);
    font-weight: 500;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
  }
  img:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: drawCircle 10s linear infinite;
  }
  img:first-child {
    position: relative;
    z-index: 2;
  }
  @keyframes drawCircle {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    25% {
      transform: translate(-50%, -50%) rotate(90deg) scale(0.8);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1);
    }
    75% {
      transform: translate(-50%, -50%) rotate(270deg) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
  }
`;

export const ButtonWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: calc(var(--vh, 1vh) * 3);
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
    border-radius: var(--font-size-big);
    font-size: var(--font-size-md);
    border: 0;
  }
`;
