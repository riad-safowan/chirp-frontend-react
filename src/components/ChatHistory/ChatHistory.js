import React, { Component } from "react";
import "./ChatHistory.css";
import Message from "../Message/Message";

class ChatHistory extends Component {
  render() {
    const messages = this.props.ChatHistory.map((msg) => (
      <Message key={msg.key} message={msg.message} />
    ));

    return (
      <div className="chat-history">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
