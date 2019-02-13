import React, { Component } from 'react';
import CellComponent from "../Components/CellComponent";

class Container extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                grid : [],
                test : ""
            };
        this.state.grid = ["1", "2", "3"];

    };

    handleChange(event) {
        console.log("handleChange for single field, new value: " + event.target.value);
        this.setState({ test: event.target.value })
    }


    handleChangeForArrayFields(index, event){
        console.log("handleChange for this.state.grid: index:" + index + ", value:" + event.target.value);
        var newGrid = [...this.state.grid];
        newGrid[index] = event.target.value
        this.setState( { grid : newGrid } );
    }

    render() {
        return (
            <div>
                <p>Single input, this onChange handler updating state via setState():
                <input type={"text"} value={this.state.test} onChange={this.handleChange.bind(this)}/>
                </p>
                <p>Array of fields bound to array in this.state:
                {
                    this.state.grid.map( (cell, index) => (
                        <CellComponent key={index} value={this.state.grid[index]}
                                       onChange={this.handleChangeForArrayFields.bind(this, index)}/>
                        )
                    )}
                </p>
            </div>
        );
    }

}
export default Container;