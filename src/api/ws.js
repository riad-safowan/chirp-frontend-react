var socket = new WebSocket("ws://localhost:9090/ws");

let update;

let connect = (cb) => {
  console.log("connecting...");
  update = cb

  socket.onopen = () => {
    console.log("connected");
  };

  socket.onmessage = (msg) => {
    console.log("Message from socket: " + msg);
    cb(msg);
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
  update(msg);
};


export {connect, sendMsg}