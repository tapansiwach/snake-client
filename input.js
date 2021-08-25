let connection;

const { MOVEUP, MOVELEFT, MOVEDOWN, MOVERIGHT, GOODBYE, HELLO } = require("./constants");

const handleUserInput = (key) => {
  if (key === "\u0003") process.exit();

  let lastKey;

  let startTime = Date.now();
  if (key === "w") {
    // console.log(MOVEUP);
    let move = setInterval(() => {
      connection.write(MOVEUP);
    }, 50);
    if (Date.now() > startTime + 50 * 10) {
      clearInterval(move);
    }
    lastKey = key;
  }

  if (key === "a") {
    // console.log(MOVELEFT);
    let move = setInterval(() => {
      connection.write(MOVELEFT);
    }, 50);
    if (Date.now() > startTime + 50 * 10) {
      clearInterval(move);
    }
    lastKey = key;
  }

  if (key === "s") {
    // console.log(MOVVEDOWN);

    let move = setInterval(() => {
      connection.write(MOVEDOWN);
    }, 50);
    if (Date.now() > startTime + 50 * 10) {
      clearInterval(move);
    }
    lastKey = key;
  }

  if (key === "d") {
    // console.log(MOVERIGHT);
    let move = setInterval(() => {
      connection.write(MOVERIGHT);
    }, 50);
    if (Date.now() > startTime + 50 * 10) {
      clearInterval(move);
    }
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

  if (key === "t") {
    connection.write("EPIPE");
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