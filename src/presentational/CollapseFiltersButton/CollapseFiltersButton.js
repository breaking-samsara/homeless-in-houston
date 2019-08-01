import React from 'react';
import { Button } from 'reactstrap';

const CollapseFiltersButton = ({ collapsed, toggleCollapseFilters }) => (
  <Button className="color-purple" onClick={() => toggleCollapseFilters()}>
    {collapsed ? 'See your details' : 'Hide your details'}
  </Button>
);

export default CollapseFiltersButton;
