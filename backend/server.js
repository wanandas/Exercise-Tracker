const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exerciseRoutes = require("./routes/exercisesRoute");
const userRoutes = require("./routes/userRoute");

require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/users", userRoutes);
app.use("/api/exercise", exerciseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}...`);
});
