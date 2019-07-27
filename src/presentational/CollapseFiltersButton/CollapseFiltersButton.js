import React from 'react';
import { Button } from 'reactstrap';

const CollapseFiltersButton = ({ collapsed, toggleCollapseFilters }) => (
  <>
    <Button onClick={() => toggleCollapseFilters()}>collapse</Button>
    <br />
    <br />
  </>
);

export default CollapseFiltersButton;
