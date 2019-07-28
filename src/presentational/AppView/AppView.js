import React from 'react';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';

import MainView from '../MainView/MainView';

const AppView = ({ isFirstLoad, shareLocationClicked, ...props }) => (
  <>
    {isFirstLoad ? (
      <FirstLoadCard onClick={shareLocationClicked} />
    ) : (
      <MainView {...props} />
    )}
  </>
);

export default AppView;
