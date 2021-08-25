const net = require("net");

const IP = "10.0.0.209";
const PORT = "50541";

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting...");
const conn = connect();

setupInput(conn);

