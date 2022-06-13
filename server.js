const express = require("express");
const app = express();
const videoRoutes = require("./routes/videoRoutes.js");
const cors = require('cors');

const port = process.env.PORT || 7001;


//Middleware 
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello World");
  });

app.use("/videos", videoRoutes);



app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});