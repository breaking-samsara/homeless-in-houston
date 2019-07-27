import sortByWalkingTime from './sortByWalkingTime';
import sortByTransitTime from './sortByTransitTime';

const sortList = (displayedPlaceList, sortBy) => {
  if (sortBy === 'Bus/Rail Time') {
    return sortByTransitTime(displayedPlaceList);
  }
  return sortByWalkingTime(displayedPlaceList);
};

export default sortList;
