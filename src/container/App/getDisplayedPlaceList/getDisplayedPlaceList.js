import applyFilters from './applyFilters/applyFilters';
import sortList from './sortList/sortList';
import didTravelTimesLoad from '../didTravelTimesLoad';

const getDisplayedPlaceList = (unfilteredPlaceList, filters, sortBy) => {
  if (!didTravelTimesLoad(unfilteredPlaceList)) {
    return [];
  }
  let displayedPlaceList = applyFilters(unfilteredPlaceList, filters);
  displayedPlaceList = sortList(displayedPlaceList, sortBy);
  return displayedPlaceList;
};

export default getDisplayedPlaceList;
