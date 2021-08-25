const { IP, PORT } = require("./constants");
const net = require("net");

// established a connection with the game server
const connect = () => {
  const connection = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  connection.setEncoding("utf8");

  connection.on("data", (data) => {
    console.log("server says:", data);
  });

  connection.on("connect", () => {
    console.log("client says: Successfully connected to game server");
    connection.write("Name: TPN");
    connection.write("Oh i thought snakes can eat other snakes");
  });

  const moveUp = function(numberOfMoves, waitDuration) {
    const startTime = Date.now();
    const upMoves = setInterval(() => {
      connection.write("Move: up");
      const endTime = Date.now();
      if (endTime - startTime > numberOfMoves * waitDuration) {
        clearInterval(upMoves);
      }
    }, waitDuration);
  }

  connection.on("connect", () => {
    moveUp(1, 50);
  });

  return connection;
};

module.exports = { connect };