import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

import * as S from './styled';
import { Wrapper } from '../Home/styled';
import {
  getMemo,
  getProductsInfo,
  getProductsRank,
  updateMemo,
} from '../../services/apis';
import { suggestionProductsFilter, sumTotalSales } from '../../utils/filter';

const Result = memo(({ userInfo }) => {
  const { state: history } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [productsInfo, setProductsInfo] = useState([]);
  const [productsRank, setProductsRank] = useState(null);

  const resultHandler = useCallback(async () => {
    const data = await getMemo(userInfo, history);
    if (
      data &&
      window.confirm(
        '이미 한번 진행 하셨습니다. 데이터를 업데이트 하시겠습니까?\n(업데이트를 해도 포인트는 지급되지 않습니다.)',
      )
    ) {
      updateMemo(userInfo, history);
    }
    const suggestionProducts = await suggestionProductsFilter(history);
    const productsInfo = await getProductsInfo(suggestionProducts);
    const productsRank = sumTotalSales(
      await getProductsRank(suggestionProducts),
    );
    setProductsRank(productsRank);
    setProductsInfo(productsInfo);
    setLoading(false);
  }, [history, userInfo]);

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
        <S.ProductWrapper>
          <ul>
            {productsRank?.map(product => {
              const info = productsInfo.find(
                info => info.product_no === product.product_no,
              );
              return (
                <li key={info.product_no}>
                  <img src={info.detail_image} alt={info.custom_product_code} />
                  <p>{info.product_name}</p>
                  <span>{Number(info.price).toLocaleString()}원</span>
                </li>
              );
            })}
          </ul>
        </S.ProductWrapper>
      </S.ResultWrapper>
    </Wrapper>
  );
});

export default Result;
