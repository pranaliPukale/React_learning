import React from "react";
class Friends extends React.Component{
    constructor()
    {
      super();
      this.state={mystatus:"single"}
    }
    componentWillUnmount(){}
    updateState=(status)=>{this.setState({
        mystatus:status
    });}
    render(){
        return(
            <div className="friend" >
               <h5><b>Props</b></h5>
               <h6>{this.props.frnd.name1}</h6>
               <h6>{this.props.frnd.name2}</h6>
               <h5><b>state</b></h5>
               <h6>{this.state.mystatus}</h6>
               <button onClick={this.updateState.bind(this,'married')}>Click me</button>
            </div>
        );
    }
}
export default Friends;