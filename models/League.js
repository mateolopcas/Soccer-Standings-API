import mongoose from 'mongoose'

let Team = new mongoose.Schema({
  Position: Number,
  Name: String,
  Points: Number,
  Played: Number,
  Winned: Number,
  Loosed: Number,
  Tie: Number,
  "Goal Difference": Number,
  SquadLogo: String
})



let League = new mongoose.Schema({
  leagueName: String,
  country: String,
  standings: [Team]
})

export default mongoose.model("leagues", League)
