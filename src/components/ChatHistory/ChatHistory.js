import React, { Component } from "react";
import "./ChatHistory.css";
import Message from "../Message/Message";

class ChatHistory extends Component {
  render() {
    this.props.ChatHistory.map((msg) => (
      <Message key={msg.timeStamp} message={msg.data} />
    ));

    return (
      <div className="chat-history">
        <h2>Chat History</h2>
      </div>
    );
  }
}

export default ChatHistory
