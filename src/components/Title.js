import * as S from '../style/Title';

const Title = ({ contents: { title, subTitle = '' } }) => {
  return (
    <S.Wrapper>
      <h2>{title}</h2>
      {subTitle === '' ? null : <p>{subTitle}</p>}
    </S.Wrapper>
  );
};

export default Title;
