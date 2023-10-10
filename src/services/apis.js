import axios from 'axios';

export const getQuestion = async () => {
  const { data } = await axios.get(
    'https://itsus.co.kr:5555/api/imall/handTestData',
  );
  return data;
};

export const getMemo = async userInfo => {
  const { data } = await axios.post(
    'https://itsus.co.kr:5555/api/imall/getMemo',
    userInfo,
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
