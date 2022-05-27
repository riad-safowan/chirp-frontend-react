import React, { Component } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api/ws";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatHistory: [{"id":1, msg:"asdf"},{"id":2, msg:"zxcv"}],
    };
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        ChatHistory: [...prevState.ChatHistory, {"id":prevState.ChatHistory.size, "msg":msg}],
      }));
      console.log(this.state);
    });
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header text="Chirp"/>
        <ChatHistory ChatHistory={this.state.ChatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App