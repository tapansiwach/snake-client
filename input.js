let connection;

const MOVEUP = "Move: up";
const MOVELEFT = "Move: left";
const MOVEDOWN = "Move: down";
const MOVERIGHT = "Move: right";

const GOODBYE = "Say: bye";
const HELLO = "Say: hello"

const handleUserInput = (key) => {
  if (key === "\u0003") process.exit();

  let lastKey;

  if (key === "w") {
    // console.log(MOVEUP);
    connection.write(MOVEUP);
    lastKey = key;
  }

  if (key === "a") {
    // console.log(MOVELEFT);
    connection.write(MOVELEFT);
    lastKey = key;
  }

  if (key === "s") {
    // console.log(MOVVEDOWN);
    connection.write(MOVEDOWN);
    lastKey = key;
  }

  if (key === "d") {
    // console.log(MOVERIGHT);
    connection.write(MOVERIGHT);
    lastKey = key;
  }

  // make a u-turn to evade another player
  if (key === "u") {
    if (lastKey === "w") {
      connection.write(MOVERIGHT);
      connection.write(MOVEDOWN);
    } else if (lastKey === "a") {
      connection.write(MOVEDOWN);
      connection.write(MOVERIGHT);
    } else if (lastKey === "s") {
      connection.write(MOVELEFT);
      connection.write(MOVEUP);
    } else if (lastKey === "d") {
      connection.write(MOVEUP);
      connection.write(MOVELEFT);
    }
  }

  if (key === "g") {
    connection.write(GOODBYE);
  }

  if (key === "h") {
    connection.write(HELLO);
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