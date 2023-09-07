import axios from 'axios';

export const getQuestion = async () => {
  const { data } = await axios.get(
    'https://itsus.co.kr:5555/api/imall/handTestData',
  );
  return data;
};
