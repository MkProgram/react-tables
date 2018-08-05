import React, {Component} from 'react';
import './app.scss';
import Table from './table/table';


class App extends Component {
  


  render() {
    const data1 = {
      number: 3123323,
      supplier: 'PF Concept'
    };
    const data2 = {
      number: 2123323,
      supplier: 'PF Concept'
    };
    return(
      <div>        
        <canvas/>
        <Table 
          type="Kundenauftrag"
          x="50"
          y="200"
          data={data1}
        />
        <Table 
          type="Bestellung"
          x="50"
          y="500"
          data={data2}
        />
      </div>
    );
  }

   
}

export default App;
