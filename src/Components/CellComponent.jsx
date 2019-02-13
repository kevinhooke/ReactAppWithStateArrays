import React, { Component } from 'react';

class CellComponent extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }

    render() {
        return (
            <span className="label">
                <input className="cell" type="text" value={this.props.value} onChange={this.handleChange}/>
            </span>
        );
    }

}
export default CellComponent;