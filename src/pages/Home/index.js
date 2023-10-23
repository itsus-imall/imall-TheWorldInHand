import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

const Home = React.memo(({ userInfo, setUserInfo }) => {
  const getUserInfoHandler = useCallback(event => {
    if (event.origin === 'http://localhost:3000') {
      setUserInfo({ userId: 'wmh1245', type: 'hand' }); // 아이프레임 실제
      window.removeEventListener('message', getUserInfoHandler);
    }
    if (
      event.origin === 'https://youngwuk2.cafe24.com' ||
      event.origin === 'https://i-m-all.com' ||
      event.origin === 'https://m.i-m-all.com' ||
      event.origin === 'https://www.i-m-all.com'
    ) {
      setUserInfo({ userId: event.data.id, type: event.data.type }); // 아이프레임 실제
      window.removeEventListener('message', getUserInfoHandler);
    }
    
  }, []);

  const loginHandler = () => {
    window.parent.postMessage({ status: 'login-check', value: 'login' }, '*');
  };

  useEffect(() => {
    if (userInfo) window.removeEventListener('message', getUserInfoHandler);
    window.addEventListener('message', event => getUserInfoHandler(event));
    return () => window.removeEventListener('message', getUserInfoHandler);
  }, [userInfo]);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <img
          src='/images/메인페이지/메인페이지_시안1_로고.png'
          alt='타이틀'
          className='title-img'
        />
        <h2>손 안의 세상</h2>
        <h3>당신을 위한 맞춤 테스트</h3>
      </S.TitleWrapper>
      <S.ImgWrapper>
        <img src='/images/메인페이지/메인페이지_시안1_로봇.png' alt='로봇' />
        <img src='/images/메인페이지/메인페이지_시안1_문양.png' alt='문양' />
      </S.ImgWrapper>
      <S.ButtonWrapper>
        <h2>당신의 손에 딱 맞춘 상품을 AI가 추천해드릴게요</h2>
        {userInfo ? (
          <Link to='testing/manufacturer'>시작하기</Link>
        ) : (
          <button onClick={loginHandler}>로그인 하기</button>
        )}
        <p>
          버튼 클릭 시 <span>개인 정보 제공 및 취급 동의</span> 한 것으로 처리
          됩니다.
        </p>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
});

export default Home;
