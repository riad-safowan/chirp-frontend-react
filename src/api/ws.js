var socket = new WebSocket("ws://192.168.31.64:9090/ws");

let connect = (cb) => {
  console.log("connecting...");

  socket.onopen = () => {
    console.log("connected");
  };

  socket.onmessage = (msg) => {
    console.log("Message from socket: " + msg.data);
    cb(JSON.parse(msg.data));
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