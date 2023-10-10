import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

import * as S from './styled';
import { Wrapper } from '../Home/styled';
import { getMemo, getProductsInfo } from '../../services/apis';
import { suggestionProductsFilter } from '../../utils/filter';

const Result = memo(({ userInfo }) => {
  const { state: history } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [productsInfo, setProductsInfo] = useState([]);

  const resultHandler = useCallback(async () => {
    console.log('aaa');
    const suggestionProducts = await suggestionProductsFilter(history);
    const productsInfo = await getProductsInfo(
      suggestionProducts.length === 0
        ? [history[0] === '삼성' ? 1027 : 226]
        : suggestionProducts,
    );
    setProductsInfo(productsInfo);
    const data = await getMemo(userInfo, history);
    console.log(data);
  }, []);

  console.log(userInfo, history);

  useEffect(() => {
    history && userInfo ? resultHandler() : navigate('/');
    setLoading(false);
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
