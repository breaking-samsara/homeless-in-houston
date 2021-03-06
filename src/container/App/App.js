import React, { Component } from 'react';

import AppView from '../../presentational/AppView/AppView';

import getFirstLoad from './getFirstLoad';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
import getInitialUnfilteredPlaceList from './getInitialUnfilteredPlaceList/getInitialUnfilteredPlaceList';
import didTravelTimesLoad from './didTravelTimesLoad';
import getDisplayedPlaceList from './getDisplayedPlaceList/getDisplayedPlaceList';
import getLocalStorage from './localStorageFunctions/getLocalStorage';
import setLocalStorage from './localStorageFunctions/setLocalStorage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      unfilteredPlaceList: getInitialUnfilteredPlaceList(),
      isFirstLoad: getFirstLoad(),
      filters: {
        gender: '',
        age: '',
        family: '',
        lgbt: '',
        pets: '',
        veteran: '',
        service: 'Night Shelter',
        collapsed: false
      }
    };
    this.setState = this.setState.bind(this);
    this.shareLocationClicked = this.shareLocationClicked.bind(this);
    this.onChooseFilter = this.onChooseFilter.bind(this);
    this.toggleCollapseFilters = this.toggleCollapseFilters.bind(this);
  }

  componentDidMount() {
    const { isFirstLoad } = this.state;
    if (!isFirstLoad) {
      getPositionAndDurations({
        currentPosition: this.state.currentPosition,
        unfilteredPlaceList: this.state.unfilteredPlaceList,
        setState: this.setState
      });
    }
    const filters = getLocalStorage('filters');
    if (filters) {
      filters.collapsed = true;
      this.setState(() => ({ filters }));
    }
  }

  shareLocationClicked = () => {
    const isFirstLoad = false;
    this.setState(() => ({ isFirstLoad }));
    setLocalStorage('isFirstLoad', isFirstLoad);
    getPositionAndDurations({
      currentPosition: this.state.currentPosition,
      unfilteredPlaceList: this.state.unfilteredPlaceList,
      setState: this.setState
    });
  };

  onChooseFilter({ name, selected }) {
    const filters = this.state.filters;
    filters[name] = selected;
    this.setState(() => ({ filters }));
    setLocalStorage('filters', filters);
  }

  toggleCollapseFilters() {
    let filters = this.state.filters;
    filters.collapsed = !filters.collapsed;
    this.setState(() => ({ filters }));
  }

  render() {
    const {
      isFirstLoad,
      filters,
      unfilteredPlaceList,
      currentPosition
    } = this.state;
    const {
      shareLocationClicked,
      onChooseFilter,
      toggleCollapseFilters
    } = this;
    return (
      <AppView
        isFirstLoad={isFirstLoad}
        filters={filters}
        displayedPlaceList={getDisplayedPlaceList(unfilteredPlaceList, filters)}
        currentPosition={currentPosition}
        shareLocationClicked={shareLocationClicked}
        onChooseFilter={onChooseFilter}
        toggleCollapseFilters={toggleCollapseFilters}
        travelTimesFinishedLoading={didTravelTimesLoad(unfilteredPlaceList)}
      />
    );
  }
}

export default App;
