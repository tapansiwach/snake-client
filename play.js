const net = require("net");

const IP = "10.0.0.209";
const PORT = "50541";

const { connect } = require("./client");

console.log("Connecting...");
connect();

const handleUserInput = (key) => {
  if (key === "\u0003") process.exit();
};

const setupStdin = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

setupStdin();

