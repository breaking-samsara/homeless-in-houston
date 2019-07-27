import React from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';
import PlaceList from '../PlaceList/PlaceList';
import Filters from '../Filters/Filters';
import SortBy from '../SortBy/SortBy';

const AppView = ({
  isFirstLoad,
  filters,
  sortBy,
  displayedPlaceList,
  currentPosition,
  shareLocationClicked,
  onChooseFilter,
  onChooseSortBy,
  travelTimesFinishedLoading
}) => (
  <>
    {isFirstLoad && <FirstLoadCard onClick={shareLocationClicked} />}
    {isFirstLoad || (
      <>
        <Filters filters={filters} onChooseFilter={onChooseFilter} />
        <br />
        <SortBy sortBy={sortBy} onChooseSortBy={onChooseSortBy} />
      </>
    )}
    {isFirstLoad || travelTimesFinishedLoading || (
      <>
        <br />
        <Spinner style={{ marginLeft: '10em' }} color="purple" />
      </>
    )}
    <br />
    <br />
    {travelTimesFinishedLoading && (
      <PlaceList
        displayedPlaceList={displayedPlaceList}
        currentPosition={currentPosition}
      />
    )}
  </>
);

export default AppView;
