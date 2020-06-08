const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutsSchema = new Schema ({
    type: {
      type: String,
      trim: true,
      required: "Workout type is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Workout name is Required"
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is Required"
      },
      weight: {
        type: Number,
        trim: true,
        required:  "Duration is Required"
      },
      reps: {
        type: Number,
        trim: true,
        required: "reps is Required"
      },
      sets: {
        type: Number,
        trim: true,
        required: "sets is Required"
      },
      distance: {
        type: Number,
        trim: true,
        required: "distance is Required"
      }
    });
    
    const Workouts = mongoose.model("Workouts", WorkoutsSchema);

     module.exports = Workouts;
