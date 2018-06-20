import React, {Component} from 'react';
import Table from './table/table';

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {color: 'blue'};
    this.hoverHeader.bind(this);
  }

  
  hoverHeader(){
    //this.state = {color: 'red'};
    this.setState({color: 'red'});

    console.log(this);
  }
  outHeader(){
    this.setState({color: 'blue'});
  }

  render() {

    return(
      <div>
        <Table />
      </div>
    );
  }

   
}

export default App;
