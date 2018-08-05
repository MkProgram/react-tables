import React, { Component } from 'react';
import './buttonRow.scss';

export default class ButtonRow extends Component {
    
    
    constructor() {
        super();
        this.state = {
            buttons: [
                {
                    name: 'Becky',
                    onClick: (a,b,c) => {
                        console.log(a, b, c);
                    }
                },
                {
                    name: 'PDF',
                    onClick: (a,b,c) => {
                        console.log(a,b,c);
                    }
                }
            ]
        }
    }    
    

    render()    
    {
        const listButtons = this.state.buttons.map((button) => 
            <button key={button.name} onClick={button.onClick} >
                {button.name}
            </button>
        ); 
        return (
            <tr className="buttonRow">
                <th>
                    {listButtons}
                </th>
            </tr>
        ) 
    }




}