import React from 'react';

const style = {
  "grass":{ background: 'rgb(237, 118, 195)' },
  "water":{ background: 'rgb(197, 242, 142)' },
  "fire":{ background: 'rgb(252, 186, 219)' },
  "bug":{ background: 'rgb(252, 240, 133)' },
  "psychic":{ background: 'rgb(244, 177, 141)' },
  "flying":{ background: 'rgb(164, 106, 226)' },
  "ghost":{ background: 'rgb(249, 234, 182)' },
  "fighting":{ background: 'rgb(129, 103, 224)' },
  "normal":{ background: 'rgb(149, 158, 249)' },
  "poison":{ background: 'rgb(155, 118, 247)' },
  "electric":{ background: 'rgb(178, 255, 212)' },
  "ground":{ background: 'rgb(159, 187, 234)' },
  "fairy":{ background: 'rgb(242, 210, 123)' },
  "rock":{ background: 'rgb(144, 242, 249)' },
  "ice":{ background: 'rgb(255, 186, 207)' },
  "dragon":{ background: 'rgb(249, 216, 114)' }
};

class Item extends React.Component {
  static propTypes: {
    children: React.PropTypes.node,
    tribe: React.PropTypes.string,
    name: React.PropTypes.string,
    clicked: React.PropTypes.func
  }
  constructor(props){
    super(props);
    this.state = { count: props.initialCount };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('Slave-Mount:', JSON.stringify(this.state)); // Call a method on the mixin
  }
  handleClick(){
    console.log('Slave-Count:', this.state.count);
    this.setState({ count: ++this.state.count });
    if('undefined' !== typeof this.props.clicked) {
      console.log('Clicked?');
      this.props.clicked(this);
    }
  }
  render(){
    const children = this.props.children;
    const tribe = this.props.tribe;
    const name = this.props.name;
    return (
        <li className={tribe} onClick={this.handleClick} style={ style[tribe] }>{children}:{this.state.count}</li>
      )
  }
}

const item = Item;

export default item