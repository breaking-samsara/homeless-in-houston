import React from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';
import PlaceList from '../PlaceList/PlaceList';
import PersonalFilters from '../PersonalFilters/PersonalFilters';
import SortBy from '../SortBy/SortBy';
import ServicesFilter from '../ServicesFilter/ServicesFilter';
import CollapseFiltersButton from '../CollapseFiltersButton/CollapseFiltersButton';

const AppView = ({
  isFirstLoad,
  filters,
  filters: { service },
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
    {isFirstLoad ? (
      <FirstLoadCard onClick={shareLocationClicked} />
    ) : (
      <>
        <CollapseFiltersButton
          collapsed={filters.collapsed}
          toggleCollapseFilters={toggleCollapseFilters}
        />
        <br />
        <br />
        {filters.collapsed || (
          <PersonalFilters filters={filters} onChooseFilter={onChooseFilter} />
        )}
        <>
          <ServicesFilter selected={service} onChooseFilter={onChooseFilter} />
          <br />
          <SortBy sortBy={sortBy} onChooseSortBy={onChooseSortBy} />
          <br />
        </>
        {travelTimesFinishedLoading ? (
          <PlaceList
            displayedPlaceList={displayedPlaceList}
            currentPosition={currentPosition}
          />
        ) : (
          <>
            <Spinner style={{ marginLeft: '10em' }} color="purple" />
          </>
        )}
      </>
    )}
  </>
);

export default AppView;
