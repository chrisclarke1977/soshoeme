import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import mediaBox from '../fat-ui/MediaBox';
import sliders from '../fat-ui/Sliders';

class TablesPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'MediaBox');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Media components include things that have to do with large media objects like Images, Video, Audio, etc.
          </p>
          <h4 className='col s12'>
            Media Box
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.mediaBox }>
              {mediaBox}
            </ReactPlayground>
          </Col>

          <h4 className='col s12'>
            Slider
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.sliders }>
              {sliders}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='MediaBox'/>
            <PropTable component='Slider'/>
            <PropTable component='Slide'/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default TablesPage;
