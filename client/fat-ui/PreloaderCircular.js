import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import Preloader from '../ui/Preloader';

export default
<Row>
  <Col s={4}>
    <Preloader size='big'/>
  </Col>
  <Col s={4}>
    <Preloader flashing/>
  </Col>
  <Col s={4}>
    <Preloader size='small'/>
  </Col>
</Row>;
