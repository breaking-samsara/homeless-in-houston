const setLocalStorage = (key, value) => {
  if (typeof window !== `undefined`) {
    // for `gatsby build` to succeed
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export default setLocalStorage;
