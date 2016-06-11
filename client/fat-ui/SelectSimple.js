import React from 'react';
import Input from '../ui/Input';
import Row from '../ui/Row';

export default
<Row>
  <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
    <option value='1'>Option 1</option>
    <option value='2'>Option 2</option>
    <option value='3'>Option 3</option>
  </Input>
</Row>;
