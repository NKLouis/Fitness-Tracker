const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutsSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      duration: {
        type: Number,
        required: "Enter an exercise duration in minutes"
      }
    }
  ]
},
{
  toJSON:{
    virtuals: true
  }
});
WorkoutsSchema.virtual("totalDuration").get(function(){
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration
},0 )
})

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;
