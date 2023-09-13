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

export const inputsCheckedFilter = () => {
  const inputs = Array.from(document.querySelectorAll('input'));
  return inputs.filter(input => input.checked).map(input => input.value);
};
