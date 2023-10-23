import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: var(--text-color);
  box-sizing: border-box;
  padding: var(--wrapper-padding);
  overflow: hidden;
  max-width: 500px;
  img {
    width: 100%;
  }
  @media screen and (min-width: 500px) {
    margin: 44px auto 0 auto;
  }
  @media screen and (min-height: 1000px) {
    max-height: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 22px));
    margin-top: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--vh, 1vh) * 1.5);
  img {
    width: 30%;
  }
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
      transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
    }
    25% {
      transform: translate(-50%, -50%) rotate(90deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(0.8);
    }
    75% {
      transform: translate(-50%, -50%) rotate(270deg) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(0.8);
    }
  }
`;

export const ButtonWrapper = styled.div`
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
