import React from 'react';
import * as S from '../style/Progress';

const Progress = React.memo(({ count: { count } }) => {
  const percent = (100 * count) / 12;
  return (
    <S.PercentWrapper>
      <S.PercentGauge percent={percent} />
    </S.PercentWrapper>
  );
});

export default Progress;
