// established a connection with the game server
const connect = () => {
  const connection = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  connection.setEncoding("utf8");

  connection.on("data", () => {
    console.log("server says:", data);
  });

  connection.on("connect", () => {
    console.log("client says: Successfully connected to game server");
    connection.write("Name: TPN");
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
    moveUp(10, 50);
  });

  return connection;
};

module.exports = { connect };