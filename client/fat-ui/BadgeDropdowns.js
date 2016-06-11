import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';
import Icon from '../ui/Icon';
import NavItem from '../ui/NavItem';

export default
<Dropdown
  trigger={
    <Button>Dropdown<Icon right>arrow_drop_down</Icon></Button>
  }>
  <NavItem>
    one
    <Badge>1</Badge>
  </NavItem>

  <NavItem>
    two
    <Badge newIcon>1</Badge>
  </NavItem>

  <NavItem>
    three
  </NavItem>
</Dropdown>;
