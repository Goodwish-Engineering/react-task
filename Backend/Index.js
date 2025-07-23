const express = require("express");
const userRoute = require("./Route/UserRouter");
const app = express();
const cors = require("cors");

require("dotenv").config();

port = process.env.PORT || 5000;
app.use(express.json());

require("./Database/DBConnection");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(port, () => {
  console.log("Server is running on " + port);
});

app.use("/api", userRoute);
