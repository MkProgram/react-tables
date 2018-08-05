import React, { Component } from 'react';
import './table.scss';

import ButtonRow from './../buttonRow/buttonRow';

class Table extends Component
{
    createDataRows(){
        let aRows = [];        
        for (const prop in this.state.data) {
            if (!this.state.data.hasOwnProperty(prop)) {
                continue;
            }            
            aRows.push((
                <tr key={prop}>
                    <td>
                        {this.state.data[prop]}
                    </td>
                </tr>
            ));
        }        
        return aRows;
    }

    constructor(props) {
        super(props);        
        this.state = {
            name: props.type,
            x: props.x,
            y: props.y,
            data: props.data,
            selected: false
        };
        this.createDataRows = this.createDataRows.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
    }
    toggleSelected() {
        this.setState({
            selected: !this.state.selected,
            x: Math.round(Math.random()*window.width),
            y: Math.round(Math.random()*window.height),

        });
    }
    

    render() {
        const tableStyle = {
            top: this.state.x + 'px',
            left: this.state.y + 'px'
        }           
        return(           
            <div className={'table '+ (this.state.selected ? 'selected' : '')} style={tableStyle} onClick={this.toggleSelected}> 
                <table>
                    <thead>                        
                        <ButtonRow/>
                        <tr>
                            <th>
                                {this.state.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createDataRows() }
                    </tbody>
                </table>            
            </div>
        )
    }
    
}

export default Table;