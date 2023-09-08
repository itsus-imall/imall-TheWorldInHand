import styled from 'styled-components';

export const PercentWrapper = styled.div`
  width: 100%;
  background: #7030a0;
  height: 18px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 4px 5px;
  overflow: hidden;
  transition: 0.3;
`;

export const PercentGauge = styled.div`
  background: #fff;
  height: 100%;
  width: ${props => props.percent}%;
  border-radius: 13px;
`;
