import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

import * as S from './styled';
import { Wrapper } from '../Home/styled';
import axios from 'axios';

const Result = memo(({ userInfo }) => {
  const { state: history } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const resultHandler = useCallback(async () => {
    const {
      data: { point, result },
    } = await axios.post(
      'https://itsus.co.kr:5555/api/imall/getMemo',
      userInfo,
    );
    setLoading(false);
  }, [userInfo]);

  useEffect(() => {
    history && userInfo ? resultHandler() : navigate('/');
  }, [history, navigate, userInfo, resultHandler]);

  if (loading) return <Loading count='2' />;

  return (
    <Wrapper>
      <S.ResultWrapper>
        <div className='title-wrapper'>
          <h2>
            고객님의 손에 최적화된
            <br />
            상품을 들고 왔어요!
          </h2>
          <p>어떻게 추천되었나요?</p>
        </div>
      </S.ResultWrapper>
    </Wrapper>
  );
});

export default Result;
