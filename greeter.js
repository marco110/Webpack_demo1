import React from "react";

export default class Greeter extends React.Component{
    render(){
        return (
        <div>
            Hello, {this.props.name}...
        </div>
    );
    }
}