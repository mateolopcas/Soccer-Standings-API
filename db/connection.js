import mongoose from "mongoose"

let mongooseConfig = {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/soccer_tables_API", mongooseConfig)

async mongoose.connection.on('connected', () => console.log('Connected to database'))
async mongoose.connection.on('disconnected', () => console.log('Disconnected from database'))
async mongoose.connection.on('error', (error) => console.error('Error:', error))


export default mongoose.connection
