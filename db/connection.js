import mongoose from "mongoose"

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/soccer_tables_API", mongooseConfig)

mongoose.connection.on('connected', () => console.log('Connected to database'))
mongoose.connection.on('disconnected', () => console.log('Disconnected from database'))
mongoose.connection.on('error', (error) => console.error('Error:', error))


export default mongoose.connection
