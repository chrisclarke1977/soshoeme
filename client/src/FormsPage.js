import React from 'react';
import Row from '../ui/Row';
import Col from '../ui/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import iconPrefixesInput from '../fat-ui/IconPrefixesInput';
import inputRadio from '../fat-ui/InputRadio';
import inputFields from '../fat-ui/InputFields';
import inputCheckbox from '../fat-ui/InputCheckbox';
import inputSwitch from '../fat-ui/InputSwitch';
import prefillingTextInput from '../fat-ui/PrefillingTextInput';
import selectSimple from '../fat-ui/SelectSimple';

class FormsPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Forms');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Forms are the standard way to receive user inputted data. The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.
          </p>
          <h4 className='col s12'>
            Input Fields
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.inputFields }>
              {inputFields}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Prefilling Text Inputs
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.prefillingTextInput }>
              {prefillingTextInput}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Icon Prefixes
          </h4>
          <p className='col s12'>You can add an Icon tag to the children of Input tag, it will be shown as icon prefix</p>
          <Col s={12}>
            <ReactPlayground code={ Samples.iconPrefixesInput }>
              {iconPrefixesInput}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Select
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.selectSimple }>
              {selectSimple}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Radio
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.inputRadio }>
              {inputRadio}
            </ReactPlayground>
          </Col>

          <h4 className='col s12'>
            Checkbox
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.inputCheckbox }>
              {inputCheckbox}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Switch
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.inputSwitch }>
              {inputSwitch}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='Input'/>
          </Col>
        </Col>
      </Row>
    );
  }

}

export default FormsPage;
