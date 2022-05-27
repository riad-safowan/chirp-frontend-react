import React , {Component} from "react";
import './Message.css'

class Message extends Component{
    constructor(props){
        super(props)
        // let temp = JSON.parse(this.props.Message)
        this.state = {
            message: props.message
        }
    }

    render(){
        return(
            <div className="message" >
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Message