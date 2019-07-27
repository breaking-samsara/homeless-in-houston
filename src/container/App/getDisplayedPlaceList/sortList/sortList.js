import sortByWalkingTime from './sortByWalkingTime';
import sortByTransitTime from './sortByTransitTime';

const sortList = (displayedPlaceList, sortBy) => {
  if (sortBy === 'walkingTime') {
    return sortByWalkingTime(displayedPlaceList);
  }
  if (sortBy === 'transitTime') {
    return sortByTransitTime(displayedPlaceList);
  }
  throw 'sortBy not valid input';
};

export default sortList;
