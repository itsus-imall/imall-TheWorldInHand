import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const test = true;

const Home = () => {
  const [imallId, setImallId] = useState(null);
  const getImallIdHandler = event => {
    if (test) return setImallId({ userId: 'wmh1245', type: 'coin' }); // 아이프레임 테스트
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
  }, []);
  return (
    <>
      {console.log(imallId)}
      <img src='/images/메인페이지/메인페이지_시안1_로고.png' alt='logo' />
      <Link to='/testing'>시작하기</Link>
    </>
  );
};

export default Home;
