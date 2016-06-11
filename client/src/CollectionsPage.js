import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';

import collectionBasic from '../fat-ui/CollectionBasic';
import collectionWithHeader from '../fat-ui/CollectionWithHeader';
import collectionWithHref from '../fat-ui/CollectionWithHref';
const component = 'Collection';

class CollectionsPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Collections allow you to group list objects together.
          </p>
          <h4 className='col s12'>
            Basic
          </h4>

          <Col s={12}>
            <ReactPlayground code={ Samples.collectionBasic }>
              { collectionBasic }
            </ReactPlayground>
          </Col>
          
          <h4 className='col s12'>
            Links
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.collectionWithHref }>
              { collectionWithHref }
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Headers
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.collectionWithHeader }>
              { collectionWithHeader }
            </ReactPlayground>
          </Col>

          <h4 className='col s12'>
            Collection Props
          </h4>

          <Col s={12}>
            <PropTable component={component}/>
          </Col>

          <h4 className='col s12'>
            CollectionItem Props
          </h4>

          <Col s={12}>
            <PropTable component='CollectionItem'/>
          </Col>
        </Col>
      </Row>
    );
  }
}
export default CollectionsPage;
