import mongoose from "mongoose"

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/soccer_tables_API"

mongoose.set("returnOriginal", false)

mongoose.connect(URI, mongooseConfig)
  .catch((err) => {
    console.log(`Error: ${err.message}`)
  })

mongoose.connection.on('connected', () => console.log('Connected to database'))
mongoose.connection.on('disconnected', () => console.log('Disconnected from database'))
mongoose.connection.on('error', (error) => console.error('Error:', error))


export default mongoose.connection
