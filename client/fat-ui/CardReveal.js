import React from 'react';

import Card from '../ui/Card';
import CardTitle from '../ui/CardTitle';
import Icon from '../ui/Icon';

export default
<Card header={<CardTitle reveal image={"assets/office.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>;
