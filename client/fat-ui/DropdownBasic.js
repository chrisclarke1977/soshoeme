import React from 'react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';
import NavItem from '../ui/NavItem';

export default
<Dropdown trigger={
    <Button>Drop me!</Button>
  }>
  <NavItem>one</NavItem>
  <NavItem>two</NavItem>
  <NavItem divider />
  <NavItem>three</NavItem>
</Dropdown>;
