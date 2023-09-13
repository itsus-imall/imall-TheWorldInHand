import * as S from '../style/Title';

const Title = ({ contents: { title, subTitle = '' } }) => {
  return (
    <S.Wrapper>
      <h2>
        {title.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </h2>
      {subTitle === '' ? null : <p>{subTitle}</p>}
    </S.Wrapper>
  );
};

export default Title;
