import { memo } from 'react';
import * as S from '../style/Loading';

const loadingContents = [
  '당신의 손 형태를 분석했어요!\n이제 상세 착용감에 대해 알아볼까요?',
  '이제 당신의 취향을 알려주세요.\n거의 끝나가요!',
  '테스트 작성이 끝났어요\n결과를 알려드릴게요!',
];

const Loading = memo(({ count }) => {
  return (
    <S.Wrapper>
      <img
        src={`/images/테스트페이지/400x400_08_${count}.png`}
        alt='로딩로봇'
      />
      {loadingContents[+count].split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </S.Wrapper>
  );
});
export default Loading;
