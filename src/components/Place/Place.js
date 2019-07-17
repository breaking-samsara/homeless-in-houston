import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';

const Place = ({
  walkingTime = {},
  transitTime = {},
  latitude,
  longitude,
  name
}) => (
  <>
    <Card>
      <CardBody>
        <h4>{name}</h4>
        <hr />
        <CardText style={{ fontSize: '1.4em' }}>
          <strong>{walkingTime.text}</strong> walking
          <br />
          <Button color="link" style={{ fontSize: '0.9em' }}>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=walking`}
            >
              walking directions
            </a>
          </Button>
          <br />
          <strong>{transitTime.text}</strong> taking bus/rail
          <br />
          <Button color="link" style={{ fontSize: '0.9em' }}>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=transit`}
            >
              bus/rail directions
            </a>
          </Button>
        </CardText>
      </CardBody>
    </Card>
    <br />
  </>
);

export default Place;