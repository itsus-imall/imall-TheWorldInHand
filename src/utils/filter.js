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
    .map(array => array[0]);
  const result = findDuplicates(suggestionProductsNumber);
  return result;
};

const findDuplicates = arr => {
  const flattenedArray = arr.flat();
  const uniqueNumbers = new Set();
  const duplicates = new Set();

  for (const num of flattenedArray) {
    if (uniqueNumbers.has(num)) {
      duplicates.add(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  return Array.from(duplicates);
};
