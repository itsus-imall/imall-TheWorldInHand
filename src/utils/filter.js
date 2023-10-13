import { getQuestion } from '../services/apis';

export const historyFilter = (history, count, payload) => {
  if (history[count]) {
    const newHistory = [...history];
    newHistory.splice(count, 1);
    newHistory.splice(count, 0, payload);
    return newHistory;
  }
  return [...history, payload];
};

export const newDataFilter = (datas, payload) => {
  let newArray = [];
  payload.forEach(element => {
    const keys = Object.keys(datas[element]).map(key => {
      return { value: key };
    });
    newArray = [...keys];
  });
  return newArray;
};

export const suggestionProductsFilter = async payload => {
  const datas = await getQuestion();
  const model = datas[payload[0]][payload[1]];
  const suggestionProductsNumber = payload[5]
    .map((key, index) => {
      const productNumber = Object.values(model[key]);
      return productNumber.map((number, productIndex) => {
        return number[payload[index + 6][productIndex]];
      });
    })
    .map(array => [...new Set(array[0])]);
  const result = findDuplicates(suggestionProductsNumber);
  console.log(suggestionProductsNumber, result);
  return result;
};

const findDuplicates = arr => {
  // 2차원 배열을 1차원 배열로 평탄화
  const flatArray = arr.reduce((acc, curr) => acc.concat(curr), []);

  // 중복된 값들을 제거
  const uniqueArray = [...new Set(flatArray)];

  // 1보다 큰 개수를 가진 중복된 값을 찾음
  const duplicates = uniqueArray.filter(
    value => flatArray.filter(v => v === value).length > 1,
  );

  // 중복된 값 중에서 1개만 남기기
  const finalArray = flatArray.filter(value => {
    if (duplicates.includes(value)) {
      duplicates.splice(duplicates.indexOf(value), 1);
      return true;
    }
    return false;
  });

  return finalArray;
};
