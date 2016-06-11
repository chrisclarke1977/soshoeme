import React from 'react';
import Input from '../ui/Input';
import Row from '../ui/Row';
import Icon from '../ui/Icon';

export default
<Row>
  <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
  <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
</Row>;
