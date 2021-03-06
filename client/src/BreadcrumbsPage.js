import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import breadcrumbs from '../fat-ui/Breadcrumbs';

const component = 'Breadcrumb';

const BreadcrumbsPage = React.createClass({
  componentDidMount() {
    store.emit('component', component);
  },

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.
          </p>
            <h4 className='col s12'>
              Basic
            </h4>
            <Col s={12}>
              <ReactPlayground code={ Samples.breadcrumb }>
                {breadcrumbs}
              </ReactPlayground>
              <PropTable component={component}/>
            </Col>
        </Col>
      </Row>
    );
  }
});

export default BreadcrumbsPage;
