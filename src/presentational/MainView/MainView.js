import React from 'react';
import { Spinner } from 'reactstrap';

import PlaceList from '../PlaceList/PlaceList';
import PersonalFilters from '../PersonalFilters/PersonalFilters';
import ServicesFilter from '../ServicesFilter/ServicesFilter';
import CollapseFiltersButton from '../CollapseFiltersButton/CollapseFiltersButton';

const MainView = ({
  filters,
  filters: { service },
  displayedPlaceList,
  currentPosition,
  onChooseFilter,
  toggleCollapseFilters,
  travelTimesFinishedLoading
}) => (
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
    <ServicesFilter selected={service} onChooseFilter={onChooseFilter} />
    <br />
    <br />
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
);

export default MainView;
