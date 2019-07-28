import React from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';
import PlaceList from '../PlaceList/PlaceList';
import Filters from '../Filters/Filters';
import SortBy from '../SortBy/SortBy';
import CollapseFiltersButton from '../CollapseFiltersButton/CollapseFiltersButton';

// 1) split Filters into PersonalFilters and Services. Services should be imported directly
// 2) SortBy should be rendered at the same time as Services, and should always be present
// 3) refactor

const AppView = ({
  isFirstLoad,
  filters,
  sortBy,
  displayedPlaceList,
  currentPosition,
  shareLocationClicked,
  onChooseFilter,
  onChooseSortBy,
  toggleCollapseFilters,
  travelTimesFinishedLoading
}) => (
  <>
    {isFirstLoad && <FirstLoadCard onClick={shareLocationClicked} />}
    {isFirstLoad || (
      <CollapseFiltersButton
        collapsed={filters.collapsed}
        toggleCollapseFilters={toggleCollapseFilters}
      />
    )}
    {isFirstLoad || filters.collapsed || (
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
