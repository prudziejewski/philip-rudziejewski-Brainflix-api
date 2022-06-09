const express = require("express");
const app = express();
const video = require("./routes/videoRoutes.js");
const cors = require('cors');
// require("dotenv").config();
const port = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello World");
  });

app.use("/videos", video);


// App.listen should be last in the code
app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});