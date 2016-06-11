import React from 'react';
import Badge from '../ui/Badge';
import Navbar from '../ui/Navbar';
import NavItem from '../ui/NavItem';

export default
<Navbar brand='logo' right>
  <NavItem href='#!'>sass</NavItem>
  <NavItem href='#!'>
    sass <Badge newIcon>4</Badge>
  </NavItem>
  <NavItem href='#!'>sass</NavItem>
</Navbar>;
