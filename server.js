const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3600;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});
