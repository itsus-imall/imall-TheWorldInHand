import * as S from '../style/progress';

const Progress = ({ count: { count } }) => {
  const percent = (100 * count) / 12;
  return (
    <S.PercentWrapper>
      <S.PercentGauge percent={percent} />
    </S.PercentWrapper>
  );
};

export default Progress;
