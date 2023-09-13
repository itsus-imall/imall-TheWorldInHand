import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  max-width: 500px;
  overflow: scroll;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 0 0 calc(50% - 1rem / 2);
  input {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: none;
    z-index: 2;
  }
  label {
    border-radius: var(--font-size-md);
    box-sizing: border-box;
    background: #fff;
    display: block;
    padding: 1rem 3rem;
    transition: 0.3s;
    cursor: pointer;
    border: 3px solid #fff;
    color: #000;
  }
  label:active {
    transform: scale(0.95);
  }
  input:checked {
    border: 0;
    display: block;
    background: #f3fff3;
  }
  input[type='radio'],
  input[type='checkbox'] {
    vertical-align: middle;
    appearance: none;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
  }
  input[type='radio']:checked,
  input[type='checkbox']:checked {
    background: #40c89a;
  }
  input[type='radio']:checked::before,
  input[type='checkbox']:checked::before {
    content: '';
    width: 0.3rem;
    height: 1.5px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, 20%) rotate(40deg);
  }
  input[type='radio']:checked::after,
  input[type='checkbox']:checked::after {
    content: '';
    width: 0.5rem;
    height: 1.5px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%) rotate(-40deg);
  }
  input:checked + label {
    background: var(--input-checked-bg-color);
    border: 3px solid var(--input-checked-border-color);
  }
  input:checked + label p {
    font-weight: bold;
  }
`;

export const ModelWrapper = styled(Wrapper)`
  width: calc(100% - 3.5rem);
  border-radius: 15px;
  padding: var(--wrapper-padding);
  background: #fff;
  gap: 0.5rem;
  position: relative;
  padding-top: 0.5rem;
`;

export const ModelImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 30%;
    flex: 0 0 10%;
  }
  p {
    flex: 0 0 65%;
    background: var(--input-checked-border-color);
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    font-weight: bold;
    position: relative;
  }
  p:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: var(--input-checked-border-color);
    border-left: 0;
    border-top: 0;
    margin-top: -7px;
    margin-left: -8px;
  }
`;

export const ModelInputWrapper = styled(InputWrapper)`
  flex: 1 auto;
  label {
    font-size: var(--font-size-sm);
    padding: 0.7rem;
    background: #f2f2f2;
    border: 2px solid #f2f2f2;
    border-radius: var(--font-size-sm);
  }
  input:checked {
    display: none;
  }
  input:checked + label {
    font-weight: bold;
    background: var(--input-checked-bg-color);
    border: 2px solid var(--input-checked-border-color);
  }
`;

export const ShapeInputWrapper = styled(InputWrapper)`
  flex: 0 0 100%;
  label {
    display: flex;
    padding: 0.5rem 1rem;
    gap: 1rem;
    img {
      border-radius: 50%;
      background: #d9d9d9;
      width: 25%;
      box-sizing: border-box;
      padding: 0.5rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      line-height: 1.5;
      text-align: left;
      word-break: keep-all;
      strong {
        font-size: 1rem;
        color: #5a1de7;
      }
      span {
        font-size: 0.8rem;
        color: #7f7f7f;
      }
    }
  }
`;

export const HandInputWrapper = styled(InputWrapper)`
  label {
    padding: 1rem;
    p {
      font-size: 1rem;
    }
    img {
      box-sizing: border-box;
      padding: 1rem;
      background: #d9d9d9;
      border-radius: 50%;
      width: 80%;
      margin-bottom: 0.5rem;
    }
  }
`;
