import React from 'react';
import Relay from 'react-relay';
import Item from './Item'

const pageSize = 10;
const offset = 5;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { pageSize: pageSize, offset: offset, showLog: false };

    this.clicked = this.clicked.bind(this);
    this.moreClicked = this.moreClicked.bind(this);
    this.lessClicked = this.lessClicked.bind(this);
    this.newFriend = this.newFriend.bind(this);
    this.showLog = this.showLog.bind(this);
    this.consoleAll = this.consoleAll.bind(this);
  }
  clicked(args){
    console.log('Master:',args.state, args.props);
  }
  moreClicked() {
    this.setState({...this.state, pageSize: this.state.pageSize + this.state.offset});
    this.props.relay.setVariables({
      pageSize: this.state.pageSize 
    });
  }
  lessClicked() {
    if (this.state.pageSize > this.state.offset) {
      this.setState({...this.state, pageSize: this.state.pageSize - this.state.offset});
    }
    this.props.relay.setVariables({
      pageSize: this.state.pageSize 
    }); 
  }
  newFriend(){
    console.log('Create new friend', this.props.viewer.friend);
  //   () => Relay.QL`(input: {clientMutationId:"8", name: "myDragon", tribe: "dragon", issues: 7,}){
  //   name,
  //   tribe,
  //   issues,
  // }`;

  }
  showLog(){
    this.setState({ ...this.state, showLog: ! (this.state.showLog)})
  }
  consoleAll(){
    this.props.viewer.friend.edges.map(edge => console.log(edge));
  }
  render() {
    return (
      <div>
        <h1>Friends list</h1>
        {this.state.showLog? 
        <pre>{JSON.stringify(this.state)}</pre>
        :
        null
        }
        <button onClick={this.moreClicked}>More</button>
        <button onClick={this.lessClicked}>Less</button>
        <button onClick={this.showLog}>Show Log</button>
        <button onClick={this.newFriend}>Add</button>
        <button onClick={this.consoleAll}>All</button>
        <div>{JSON.stringify(this.props.viewer.friend).split(',').join('<br/>')}</div>
        <ul>
          {this.props.viewer.friend.edges.map(edge =>
            <Item clicked={this.clicked} tribe={edge.node.tribe} initialCount={edge.node.issues} key={edge.node.id} name={edge.node.name}>{edge.node.name}</Item>
          )}
        </ul>

      </div>
    );
  }
};

/*

Mutation fragment 

mutation {
  addFriend(input: {clientMutationId:"8", name: "myDragon", tribe: "dragon", issues: 7,}){
    name,
    tribe,
    issues,
  }
}

*/

export default Relay.createContainer(App, {
   initialVariables: {
    pageSize: pageSize
  },
  fragments: {
    // add: () => Relay.QL`fragment on User {
    //   $(friend.getFragment('AddFriend'))
    // } `,
    viewer: () => Relay.QL`
      fragment on User {
        friend(first: $pageSize) {
          edges {
            cursor,
            node {
              id,
              name,
              tribe,
              issues,
            },
          },
          pageInfo {
            hasNextPage,
            hasPreviousPage,
          },
        },
      }
    `,
  },
});
