import React, { Component } from 'react';


class Table extends Component
{

    constructor() {
        super();
        this.state = {
            name: 'Kundenauftrag',
        };
    }

    render() {
        return(
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <td>{this.state.name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3123232</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;