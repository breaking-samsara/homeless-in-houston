const getLocalStorage = itemName => {
  if (typeof window !== `undefined`) {
    // for `gatsby build` to succeed
    return JSON.parse(localStorage.getItem(itemName));
  }
  return;
};

export default getLocalStorage;
