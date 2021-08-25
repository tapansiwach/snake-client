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

  return connection;
};

module.exports = { connect };