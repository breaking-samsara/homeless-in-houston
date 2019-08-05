import React from 'react';
import { Button } from 'reactstrap';
import generateUrl from './generateUrl';

const DirectionsLink = props => (
  <Button color="link" style={{ fontSize: '0.9em' }}>
    <a href={generateUrl({ ...props })}>
      {props.travelMode === 'walking' && 'walking'} directions
    </a>
  </Button>
);

export default DirectionsLink;
