import axios from 'axios';

export const getQuestion = async () => {
  const { data } = await axios.get(
    'https://itsus.co.kr:5555/api/imall/handData',
  );
  return data;
};

export const getMemo = async (userInfo, history) => {
  const { data } = await axios.post(
    'https://itsus.co.kr:5555/api/imall/getHandMemo',
    { userInfo, history },
  );
  return data;
};

export const getProductsInfo = async suggestionProducts => {
  const {
    data: { products },
  } = await axios.post(
    'https://itsus.co.kr:5555/api/imall/productsInfo',
    suggestionProducts,
  );
  return products;
};
