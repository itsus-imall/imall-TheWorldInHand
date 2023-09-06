import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <section>
      <img src='/images/메인페이지/메인페이지_시안1_로봇.jpg' alt='로봇' />
      {imallId ? (
        <Link to='/testing'>시작하기</Link>
      ) : (
        <button>로그인 하기</button>
      )}
    </section>
  );
};

export default Home;
