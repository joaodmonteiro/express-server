const express = require("express");
const PORT = 8000;

const app = express();

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
