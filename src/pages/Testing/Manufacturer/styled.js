import styled from 'styled-components';

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
