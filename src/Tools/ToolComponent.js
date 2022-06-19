import { Component } from "react";

export class ToolComponent extends Component{

    
    updateState(updatedState){
        this.setState(Object.assign({}, this.state, updatedState));
    }

    updateStateProperty(propName, propValue){
        var newState = Object.assign({}, this.state);
        newState[propName] = propValue;
        this.setState(newState);
    }
}
