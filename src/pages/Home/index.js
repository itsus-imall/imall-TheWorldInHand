import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

const Home = () => {
  const [imallId, setImallId] = useState(null);
  const getImallIdHandler = event => {
    if (event.origin === 'http://localhost:3000')
      return setImallId({ userId: 'wmh1245', type: 'testing' }); // 아이프레임 테스트
    if (
      event.origin === 'https://youngwuk2.cafe24.com' ||
      event.origin === 'https://i-m-all.com' ||
      event.origin === 'https://m.i-m-all.com' ||
      event.origin === 'https://www.i-m-all.com'
    ) {
      setImallId({ userId: event.data.id, type: event.data.type }); // 아이프레임 실제
    }
  };

  useEffect(() => {
    window.addEventListener('message', event => getImallIdHandler(event));
    return () => window.removeEventListener('message', getImallIdHandler);
  }, [imallId]);

  return (
    <S.Wrapper>
      <img
        src='/images/메인페이지/메인페이지_시안1_로고.png'
        alt='타이틀'
        className='title-img'
      />
      <S.TitleWrapper>
        <h2>손 안의 세상</h2>
        <h3>당신을 위한 맞춤 테스트</h3>
      </S.TitleWrapper>
      <img src='/images/메인페이지/메인페이지_시안1_로봇.jpg' alt='로봇' />
      <S.ButtonWrapper>
        <h2>당신의 손에 딱 맞춘 상품을 AI가 추천해드릴게요</h2>
        {imallId ? (
          <Link to='/testing'>시작하기</Link>
        ) : (
          <button>로그인 하기</button>
        )}
        <p>
          버튼 클릭 시 <span>개인 정보 제공 및 취급 동의</span> 한것으로 처리
          됩니다.
        </p>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Home;
