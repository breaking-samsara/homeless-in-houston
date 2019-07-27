import copy from 'utils-copy';

const sortByWalkingTime = displayedPlaceList => {
  const placeList = copy(displayedPlaceList);
  placeList.sort(
    (a, b) => a.transitTime.milliseconds - b.transitTime.milliseconds
  );
  return placeList;
};

export default sortByWalkingTime;
