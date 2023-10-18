import axios from 'axios';

const BASE_URL = 'https://itsus.co.kr:5555/api/imall';

export const getQuestion = async () => {
  const { data } = await axios.get(`${BASE_URL}/handData`);
  return data;
};

export const getMemo = async (userInfo, history) => {
  const { data } = await axios.post(`${BASE_URL}/getHandMemo`, {
    userInfo,
    history,
  });
  return data;
};

export const updateMemo = async (userInfo, history) => {
  const { data } = await axios.post(`${BASE_URL}/updateHandMemo`, {
    userInfo,
    history,
  });
  return data;
};

export const getProductsInfo = async productsNumber => {
  const {
    data: { products },
  } = await axios.post(`${BASE_URL}/getProductsInfo`, productsNumber);
  return products;
};

export const getProductsRank = async productsNumber => {
  const {
    data: { salesvolume },
  } = await axios.post(`${BASE_URL}/getProductsSale`, productsNumber);
  return salesvolume;
};
