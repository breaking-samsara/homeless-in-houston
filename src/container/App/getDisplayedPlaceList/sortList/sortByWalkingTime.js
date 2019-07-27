import copy from 'utils-copy';

const sortByWalkingTime = displayedPlaceList => {
  const placeList = copy(displayedPlaceList);
  placeList.sort(
    (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
  );
  return placeList;
};

export default sortByWalkingTime;
