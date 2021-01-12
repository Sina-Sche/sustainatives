require("dotenv").config();
const express = require("express");
const path = require("path");
const { connect } = require("./lib/database");
const products = require("./lib/routes/products");
const projects = require("./lib/routes/projects");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3600;

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use("/api/products", products);
app.use("/api/projects", projects);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/public", "index.html"));
});

async function run() {
  try {
    console.log("On your way to the database...");
    await connect(process.env.DB_URI, process.env.DB_NAME);
    console.log("Success! You are now connected to the database");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
