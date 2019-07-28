import getLocalStorage from './localStorageFunctions/getLocalStorage';

const getFirstLoad = () => {
  let isFirstLoad;
  isFirstLoad = getLocalStorage('isFirstLoad');
  if (typeof isFirstLoad === 'boolean' && isFirstLoad === false) {
    return false;
  }
  return true;
};

export default getFirstLoad;
