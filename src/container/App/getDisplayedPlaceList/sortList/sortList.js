import sortByWalkingTime from './sortByWalkingTime';

const sortList = displayedPlaceList => {
  return sortByWalkingTime(displayedPlaceList);
};

export default sortList;
