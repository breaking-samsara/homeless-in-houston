import getLocalStorage from './localStorageFunctions/getLocalStorage';

const getFirstLoad = () => {
  let isFirstLoad;
  if (typeof window !== `undefined`) {
    // for `gatsby build` to succeed
    isFirstLoad = getLocalStorage('isFirstLoad');
  }
  if (typeof isFirstLoad === 'boolean' && isFirstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
