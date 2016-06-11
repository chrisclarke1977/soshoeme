import React from 'react';
import Input from '../ui/Input';
import Row from '../ui/Row';

export default
<Row>
    <Input name='group1' type='checkbox' value='red' label='Red' />
    <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked' />
    <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled' />
</Row>;
