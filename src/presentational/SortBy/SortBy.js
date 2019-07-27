import React from 'react';
import { Label, ButtonGroup, Button } from 'reactstrap';

const SortBy = ({
  choices = ['Walking Time', 'Bus/Rail Time'],
  sortBy: selected,
  onChooseSortBy
}) => (
  <>
    <Label>Sort by:</Label>
    <br />
    <ButtonGroup>
      {choices.map((choice, index) => (
        <Button
          color="primary"
          key={index}
          onClick={() => onChooseSortBy({ selected: choice })}
          active={selected === choice}
        >
          {choice}
        </Button>
      ))}
    </ButtonGroup>
    <p>Selected: {selected}</p>
  </>
);

export default SortBy;
