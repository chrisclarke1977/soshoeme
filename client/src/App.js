import React from 'react';
import {Row, Col, Navbar, NavItem, Chip, Tag, Toast, Breadcrumb, MenuItem, Badge, Dropdown, Button, Collection, CollectionItem, Card, CardPanel, CardTitle, Pagination, Footer} from '../ui';

const App = ({name}) =>(
<div>
    <Navbar brand='soshoeme' right>
        <NavItem href='#!'>sass</NavItem>
        <NavItem href='#!'>
        sass <Badge newIcon>4</Badge>
        </NavItem>
        <NavItem href='#!'>
        fiddle
        </NavItem>
    </Navbar>
    <Row>
    <Breadcrumb>
        <MenuItem>first</MenuItem>
        <MenuItem>second</MenuItem>
        <MenuItem>third</MenuItem>
    </Breadcrumb>
    </Row>
    <Row>
    <Chip>
      <image src='assets/yuna.jpg' alt='Contact Person' />
      Jane Doe
    </Chip>
    <Tag>tag</Tag>
</Row>
    <Toast toast="here you go!">
Toast
</Toast>
    <Dropdown trigger={
    <Button>Drop me {name}!</Button>
    }>
        <Collection>
            <CollectionItem href="#!">
            Alan <Badge>1</Badge>
            </CollectionItem>
            <CollectionItem href="#!">
            Alan <Badge newIcon>4</Badge>
            </CollectionItem>
            <CollectionItem href="#!">
            Alan <Badge>14</Badge>
            </CollectionItem>
            <CollectionItem>
            hi
            </CollectionItem>
        </Collection>
    </Dropdown>
<Row>
    <Button floating large className='red' waves='light' icon='add' />
</Row>
<Row>
<Col s={6} className='grid-example'>1</Col>
<Col s={6} className='grid-example'>2</Col>
</Row>
<Row>
<Col s={12} m={5}>
<CardPanel className="teal lighten-4 black-text">
I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
</CardPanel>
</Col>
<Col s={12} m={7}>
For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
</Col>
</Row>
<Row>

<Col s={12} m={7}>
<Card header={<CardTitle reveal image={"assets/office.jpg"} waves='light'/>}
title="Card Title"
reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
<p><a href="#">This is a link</a></p>
</Card>
</Col>
</Row>
<Row>
<Pagination items={10} activePage={2} maxButtons={8}/>
</Row>
<Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
<Button floating icon='insert_chart' className='red'/>
<Button floating icon='format_quote' className='yellow darken-1'/>
<Button floating icon='publish' className='green'/>
<Button floating icon='attach_file' className='blue'/>
</Button>

<Footer copyrights="&copy; 2015 Copyright Text"
moreLinks={
<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
}
links={
<ul>
<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
</ul>
}
className='example'
>
<h5 className="white-text">Footer Content</h5>
<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
</div>);

export default App;