import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 5rem);
  position: relative;
  display: flex;
  background: #fff;
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;
  padding: 0.3rem 0;
  button {
    flex: 1 1 50%;
    background: transparent;
    border: 0;
    outline: 0;
    z-index: 2;
    padding: 0;
    font-size: 0.8rem;
    transition: 0.3s;
    cursor: pointer;
  }
  button:first-of-type {
    color: ${props => (props.toggle ? '#fff' : '#000')};
  }
  button:last-of-type {
    color: ${props => (props.toggle ? '#000' : '#fff')};
  }
`;

export const SelectedToggle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transition: 0.3s;
  transform: translate(${props => (props.toggle ? '0' : '100%')}, -50%);
  width: 50%;
  height: 100%;
  border-radius: 30px;
  background: var(--input-checked-border-color);
  border: 0.2rem solid #fff;
  box-sizing: border-box;
`;
