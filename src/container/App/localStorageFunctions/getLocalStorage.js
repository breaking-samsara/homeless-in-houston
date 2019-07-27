const getLocalStorage = itemName => {
  if (typeof window !== `undefined`) {
    // for `gatsby build` to succeed
    if (!JSON.parse(localStorage.getItem(itemName))) {
      return;
    }
    return JSON.parse(localStorage.getItem(itemName));
  }
  return;
};

export default getLocalStorage;
