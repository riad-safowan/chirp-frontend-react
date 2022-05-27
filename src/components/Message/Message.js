import React , {Component} from "react";
import './Message.css'

class Message extends Component{
    constructor(props){
        super(props)
        let temp = JSON.parse(this.props.Message)
        this.state = {
            message: temp
        }
    }

    render(){
        return(
            <div className="message" >
                <p>{this.state.message.body}</p>
            </div>
        )
    }
}

export default Message