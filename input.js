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

module.exports = { setupStdin };