const net = require("net");

const IP = "10.0.0.209";
const PORT = "50541";

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

console.log("Connecting...");
connect();

