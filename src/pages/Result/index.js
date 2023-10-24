import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

import * as S from './styled';
import { Wrapper } from '../Home/styled';
import {
  getMemo,
  getProductsInfo,
  getProductsRank,
  getReview,
  updateMemo,
} from '../../services/apis';
import {
  maskText,
  sortProductsByRank,
  suggestionProductsFilter,
  sumTotalSales,
} from '../../utils/filter';

import { ReactComponent as GraphSVG } from '../../svg/graph.svg';

const Result = memo(({ userInfo }) => {
  const { state: history } = useLocation();
  const navigate = useNavigate();
  const [productsInfo, setProductsInfo] = useState(null);
  const [review, setReview] = useState(null);
  const [productsMore, setProductsMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const suggestionRef = useRef(null);
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
    const result = sortProductsByRank(productsInfo, productsRank);
    const reviews = await getReview();
    setReview(
      reviews.find(
        review => review.productNumber === productsRank[0].product_no,
      ),
    );
    setProductsMore(result.length >= 4 ? false : true);
    setProductsInfo(result);
    setLoading(false);
  }, [history, userInfo]);

  const reTestHandler = () => navigate('/');
  const suggestionScrollHandler = () => {
    suggestionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const productClickHandler = event => {
    const { productno: productNo } = event.currentTarget.dataset;
    window.parent.postMessage(
      { status: 'redirection-product', value: productNo },
      '*',
    );
  };
  useEffect(() => {
    history && userInfo ? resultHandler() : navigate('/');
  }, [history, navigate, resultHandler, userInfo]);

  if (loading && !productsInfo && !review) return <Loading count='2' />;

  return (
    <Wrapper style={{ padding: '0' }}>
      <S.ResultWrapper>
        <div className='title-wrapper'>
          <h2>
            고객님의 손에 <span>최적화</span>된
            <br />
            상품을 들고 왔어요!
          </h2>
          <button onClick={suggestionScrollHandler}>
            어떻게 추천되었나요?
          </button>
        </div>
        <S.ProductWrapper buttonhide={productsMore}>
          <ul>
            {productsInfo.map((product, index) => {
              if (!productsMore && index >= 4) return null;
              return (
                <li
                  key={product.product_no}
                  data-productNo={product.product_no}
                  onClick={productClickHandler}
                >
                  <img
                    src={product.detail_image}
                    alt={product.custom_product_code}
                  />
                  <p>{product.product_name}</p>
                  <span>{Number(product.price).toLocaleString()}원</span>
                </li>
              );
            })}
          </ul>
          <button onClick={() => setProductsMore(true)}>
            추천 상품 더 보기
          </button>
        </S.ProductWrapper>
        <S.ReviewWrapper>
          <h2>추천 상품의 실시간 리뷰예요!</h2>
          <div>
            <div className='title'>
              <div>
                <p className='name'>{maskText(review.id)}</p>
                <p className='rating'>{review.rating}</p>
              </div>
              <p className='date'>{review.date.split('T')[0]}</p>
            </div>
            <div className='content-wrapper'>
              <div className='img'>
                <img src={review.img} alt='review' />
              </div>
              <p className='product-name'>{review.productName}</p>
              <div className='content'>{review.content}</div>
            </div>
          </div>
        </S.ReviewWrapper>
        <S.SuggestionWrapper ref={suggestionRef}>
          <h2>이 상품, 이렇게 추천했어요!</h2>
          <div>
            <GraphSVG />
            <div>
              <p>
                추천 상품
                <br />
                클릭 수
              </p>
              <p>상품 만족도</p>
              <p>
                장바구니
                <br />
                담긴 수
              </p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                동일 취향의 고객분들의 만족도를 나타냈던 상품들로 추천해 드려요.
              </li>
              <li>
                상품 분석과 약 64,276건의 리뷰 데이터들을 활용해서 고객의 손과
                취향에 맞춘 제품들로 추천했어요.
              </li>
              <li>내가 가진 습관들을 기준으로 삼아 맞춘 상품이예요.</li>
            </ul>
          </div>
        </S.SuggestionWrapper>
        <S.RetestWrapper>
          <h2>
            테스트를 다시 진행하고
            <br />
            싶으신가요?
          </h2>
          <button onClick={reTestHandler}>테스트 다시 하기</button>
        </S.RetestWrapper>
      </S.ResultWrapper>
    </Wrapper>
  );
});

export default Result;
