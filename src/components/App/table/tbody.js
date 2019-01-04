import React from "react";
import Row from "./row";

class Tbody extends React.Component{
    render(){
        const values=this.props.values;
        let renderRows=values.map((val,index)=>
        <Row key={index} isHeader={false} values={val} onViewClick={this.props.onViewClick}/>
        );
        return (
            <tbody>
                {renderRows}
            </tbody>
        );
    }
}

export default Tbody