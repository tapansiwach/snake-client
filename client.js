// established a connection with the game server
const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  client.setEncoding("utf8");

  client.on("data", () => {
    console.log("server says:", data);
  });

  return client;
};

module.exports = { connect };