const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 3600;
const app = express();

app.use(middleware);
app.use("/api", router);

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
