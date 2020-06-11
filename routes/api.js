const express = require("express");
const router = express.Router();

const db = require("../models")

    //getting exercise
    router.get("/api/workouts", (req, res)=> {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(error=> {
            res.json(error)
        });
    });

    //adding exercise
    router.post("/api/workouts", ({body}, res)=> {
        db.Workout.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(error=> {
            console.log("error in create workout" , error)
        });
    }); 

    // //updating exercise
    // router.put("/api/workouts/:id" , (req, res) => {
    //  db.Workout.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     $push: { exercises: req.body },
    //   },
    //   { useFindAndModify: false }
    // )
    //   .then((dbWorkouts) => {
    //     res.json(dbWorkouts);
    //   })
    //   .catch((err) => {
    //     res.json(err);
    //   });
    // });

    // // getting stats page
    // router.get("/workouts/range", (req, res) => {
    //     db.Workout.find({}).sort({ day: -1 }).limit(7)
    //     .then(dbWorkouts => {
    //         res.json(dbWorkouts)
    //     }).catch((err) => {
    //         res.json(err);
    //     })
    // })
 
    module.exports = router;