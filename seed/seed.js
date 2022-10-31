import db from '../db/connection.js'
import League from '../models/League.js'
import data from './seasons_data.json' assert {type: 'json'}

async function insertData() {
    await League.deleteMany({})
    await League.insertMany(data)
    await db.close()
}

insertData()
