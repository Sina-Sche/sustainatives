require("dotenv").config();
const express = require("express");
const path = require("path");

const { connect } = require("./lib/database");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3600;

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/public", "index.html"));
});

async function run() {
  console.log("On your way to the database...");
  await connect(process.env.DB_URI, process.env.DB_NAME);
  console.log("Success! You are now connected to the database");
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

run();
