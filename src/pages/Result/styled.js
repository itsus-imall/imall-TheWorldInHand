import styled from 'styled-components';

export const ResultWrapper = styled.section`
  width: 100%;
  overflow-y: scroll;
  background: #fff;
  color: #000;
  padding: 1rem;
  padding-top: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  & .title-wrapper {
    text-align: center;
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      line-height: 1.3;
      span {
        color: var(--background-color);
      }
    }
    button {
      font-size: 1rem;
      background: var(--background-color);
      display: inline-block;
      color: #fff;
      border-radius: 2rem;
      padding: 0.2rem 0.8rem;
      border: 0;
      font-weight: 400;
    }
  }
`;

export const ProductWrapper = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    li {
      flex: 0 0 calc(50% - 0.5rem);
      box-sizing: border-box;
      border-radius: 1rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      img {
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.7rem;
        margin-bottom: 0.3rem;
        line-height: 1.3;
      }
      span {
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
  }
  button {
    display: ${({ buttonhide }) => (buttonhide ? 'none' : 'block')};
    margin: 0 auto;
    margin-top: 1rem;
    border: 0;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    background: var(--background-color);
    font-size: 1rem;
  }
`;

export const ReviewWrapper = styled.section`
  width: 100%;
  text-align: left;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-left: 0.3rem;
  }
  & > div {
    padding: 1rem;
    box-sizing: border-box;
    background: #e9ecef;
    border-radius: 1rem;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      .date {
        color: #999;
        font-size: 0.8rem;
      }
      div {
        .name {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 10px;
        }
        .rating {
          color: var(--background-color);
          font-size: 0.8rem;
        }
        & > * {
          display: block;
          margin-right: 10px;
        }
      }
    }
  }
  .content-wrapper {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    .product-name {
      font-size: 0.8rem;
      color: #888;
      &::before {
        content: '상품명';
        font-weight: bold;
        margin-right: 1rem;
      }
    }
    .content {
      flex: 0 0 calc(60% - 0.5rem);
      line-height: 1.3;
      font-size: 0.8rem;
    }
    .img {
      flex: 0 0 calc(40% - 0.5rem);
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      &::before {
        content: '이미지를 꾹 누르시면 크게 보실 수 있습니다.';
        position: absolute;
        left: 10px;
        bottom: 5px;
        font-size: 0.8rem;
        color: #999;
      }
    }
  }
`;

export const SuggestionWrapper = styled.section`
  h2 {
    text-align: left;
    font-size: 1.2rem;
    padding-left: 0.3rem;
  }
  & > div {
    background: #e9ecef;
    border-radius: 1rem;
    margin-top: 1rem;
    box-sizing: border-box;
    padding: 1rem;
  }
  & > div {
    position: relative;
    svg {
      width: 50%;
      height: auto;
    }
    div {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      transform: translate(-50%, 0);
      text-align: left;
      p {
        position: absolute;
        font-size: 0.8rem;
        white-space: nowrap;
        line-height: 1.2;
      }
      p:first-child {
        top: 30%;
        left: -20%;
      }
      p:nth-child(2) {
        top: 20%;
        left: 90%;
      }
      p:last-child {
        top: 70%;
        left: 90%;
      }
    }
    ul li {
      text-align: left;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    ul li:last-child {
      margin-bottom: 0;
    }
    ul li::before {
      content: '👉';
      margin-right: 5px;
    }
  }
`;

export const RetestWrapper = styled.section`
  h2 {
    line-height: 1.2;
    font-size: 1.2rem;
  }
  button {
    padding: 1rem 2rem;
    border: 0;
    background: var(--input-checked-border-color);
    color: #fff;
    border-radius: 2rem;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;
