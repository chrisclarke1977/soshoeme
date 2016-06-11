import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ProgressBar from '../ui/ProgressBar';

export default
<Row>
  <Col s={12}>
    <ProgressBar progress={70}/>
  </Col>
  <Col s={12}>
    <ProgressBar />
  </Col>
</Row>;
