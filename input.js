let connection;
const MOVEUP = "Move: up";
const MOVELEFT = "Move: left";
const MOVEDOWN = "Move: down";
const MOVERIGHT = "Move: right";

const handleUserInput = (key) => {
  if (key === "\u0003") process.exit();

  if (key === "w") {
    // console.log(MOVEUP);
    connection.write(MOVEUP);
  }

  if (key === "a") {
    // console.log(MOVELEFT);
    connection.write(MOVELEFT);
  }

  if (key === "s") {
    // console.log(MOVVEDOWN);
    connection.write(MOVEDOWN);
  }

  if (key === "d") {
    // console.log(MOVERIGHT);
    connection.write(MOVERIGHT);
  }
};

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

module.exports = { setupInput };