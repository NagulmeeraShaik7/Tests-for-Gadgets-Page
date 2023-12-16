const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  let date = new Date();
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);

module.exports = app;
