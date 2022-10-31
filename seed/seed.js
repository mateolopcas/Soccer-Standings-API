import db from '../db/connection.js'
import League from '../models/League.js'
import data from './seasons_data.json' assert {type: 'json'}

async function insertData() {
  await db.dropDatabase()
  await League.create(data)
  await db.close()
}

insertData()
