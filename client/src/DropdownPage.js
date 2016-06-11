
import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import dropdown from '../fat-ui/DropdownBasic';

const component = 'Dropdown';

class DropdownPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Add a dropdown list to any button.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.dropdown }>
              {dropdown}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component={component}/>
          </Col>
        </Col>
      </Row>
    );
  }
}
export default DropdownPage;
