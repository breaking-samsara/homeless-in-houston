import applyFilters from './applyFilters/applyFilters';
import sortList from './sortList/sortList';
import didTravelTimesLoad from '../didTravelTimesLoad';

const getDisplayedPlaceList = (unfilteredPlaceList, filters) => {
  if (!didTravelTimesLoad(unfilteredPlaceList)) {
    return [];
  }
  let displayedPlaceList = applyFilters(unfilteredPlaceList, filters);
  displayedPlaceList = sortList(displayedPlaceList, 'walkingTime');
  return displayedPlaceList;
};

export default getDisplayedPlaceList;
