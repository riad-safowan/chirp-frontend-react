var socket = new WebSocket("ws://localhost:9090/ws");

let connect = (cb) => {
  console.log("connecting...");

  socket.onopen = () => {
    console.log("connected");
  };

  socket.onmessage = (msg) => {
    console.log("Message from socket: " + msg);
  };

  socket.onclose = (event) => {
    console.log("Disconnected: " + event);
  };

  socket.onerror = (err) => {
    console.log("socket error: " + err);
  };
};

let sendMsg = (msg) => {
  console.log("sending msg: " + msg);
  socket.send(msg);
};


export {connect, sendMsg}