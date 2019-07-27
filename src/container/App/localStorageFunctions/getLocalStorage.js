const getLocalStorage = itemName => {
  if (!JSON.parse(localStorage.getItem(itemName))) {
    return {};
  }
  return JSON.parse(localStorage.getItem(itemName));
};

export default getLocalStorage;
