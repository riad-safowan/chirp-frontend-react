import React , {Component} from "react";
import './ChatInput.css'

class ChatInput extends Component{
    render(){
        return(
            <div className="chat-input">
                <input onKeyDown={this.props.send} placeholder="Write message..."></input>
            </div>
        )
    }
}

export default ChatInput