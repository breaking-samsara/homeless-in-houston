import React from 'react';
import { Button } from 'reactstrap';

const CollapseFiltersButton = ({ collapsed, toggleCollapseFilters }) => (
  <>
    <Button onClick={() => toggleCollapseFilters()}>
      {collapsed ? 'See your details' : 'Hide your details'}
    </Button>
    <br />
    <br />
  </>
);

export default CollapseFiltersButton;
