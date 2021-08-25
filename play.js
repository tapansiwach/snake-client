const net = require("net");

const IP = "10.0.0.209";
const PORT = "50541";

const { connect } = require("./client");

console.log("Connecting...");
connect();

