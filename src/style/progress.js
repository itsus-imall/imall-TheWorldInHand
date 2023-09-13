import styled from 'styled-components';

export const PercentWrapper = styled.div`
  width: calc(100% - var(--wrapper-padding));
  background: #7030a0;
  height: 18px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 4px 5px;
  overflow: hidden;
`;

export const PercentGauge = styled.div`
  transition: 0.3s;
  background: #fff;
  height: 100%;
  width: ${props => props.percent}%;
  border-radius: 13px;
`;
