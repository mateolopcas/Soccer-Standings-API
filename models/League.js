import mongoose from 'mongoose'

let Team = new mongoose.Schema({
  Position: Number,
  Name: String,
  Points: Number,
  Played: Number,
  Winned: Number,
  Loosed: Number,
  Tie: Number,
  "Goal Difference": Number
})



let League = new mongoose.Schema({
  leagueName: String,
  standings: [Team]
})

export default mongoose.model("leagues", League)
