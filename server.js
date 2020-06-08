const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/workouts.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

//routes
app.get("/workouts", (req, res) => {
    db.find({})
      .then(dbworkouts => {
        res.json(dbworkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   app.post("/newWorkout", ({ body }, res) => {
//     db.create(body)
//       .then(dbWorkouts => {
//         res.json(dbWorkouts);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
  