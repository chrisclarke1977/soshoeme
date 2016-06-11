import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import Chip from '../ui/Chip';
import Tag from '../ui/Tag';

export default
<Row>
  <Col s={12}>
    <Chip>
      <image src='assets/yuna.jpg' alt='Contact Person' />
      Jane Doe
    </Chip>
    <Tag>tag</Tag>
  </Col>
</Row>;
