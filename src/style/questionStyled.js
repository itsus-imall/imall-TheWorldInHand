import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 0 0 calc(50% - var(--wrapper-padding) / 2);
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
    padding: calc(var(--wrapper-padding) * 1.5) calc(var(--wrapper-padding) * 2);
    transition: 0.3s;
    cursor: pointer;
  }
  label:active {
    transform: scale(0.98);
  }
  input:checked {
    border: 0;
    display: block;
    background: #f3fff3;
  }
  input[type='radio'] {
    vertical-align: middle;
    appearance: none;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
  }
  input[type='radio']:checked {
    background: #40c89a;
  }
  input[type='radio']:checked::before {
    content: '';
    width: 0.3rem;
    height: 1.5px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, 20%) rotate(40deg);
  }
  input[type='radio']:checked::after {
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
    padding: calc(var(--wrapper-padding) * 1.5 - 0.5rem)
      calc(var(--wrapper-padding) * 2 - 0.5rem);
  }
`;
