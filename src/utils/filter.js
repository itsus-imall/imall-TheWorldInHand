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
  return result.length === 0 ? [payload[0][0] === '삼성' ? 1027 : 226] : result;
};

export const sumTotalSales = data => {
  const salesMap = new Map();
  data.forEach(item => {
    const { product_no, total_sales } = item;
    if (salesMap.has(product_no)) {
      salesMap.set(product_no, salesMap.get(product_no) + total_sales);
    } else {
      salesMap.set(product_no, total_sales);
    }
  });
  const result = [...salesMap].map(([product_no, total_sales]) => ({
    product_no,
    total_sales,
  }));
  return calculateRanking(result);
};

const calculateRanking = data => {
  const rankedData = data
    .sort((a, b) => b.total_sales - a.total_sales)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return rankedData;
};

const findDuplicates = arr => {
  const flatArray = arr.reduce((acc, curr) => acc.concat(curr), []);
  const uniqueArray = [...new Set(flatArray)];
  const duplicates = uniqueArray.filter(
    value => flatArray.filter(v => v === value).length > 1,
  );
  const finalArray = flatArray.filter(value => {
    if (duplicates.includes(value)) {
      duplicates.splice(duplicates.indexOf(value), 1);
      return true;
    }
    return false;
  });
  return finalArray;
};
