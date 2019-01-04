import React from "react";

class Child extends React.Component {
    render(){
        return(
            <div>
                <span>The number is {this.props.count >= 5 ? this.props.count ==5 ? 'equals to':'greater than':'less than' } 5 </span>
            </div>
        )
    }

}

export default Child;