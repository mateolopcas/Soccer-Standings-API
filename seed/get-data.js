import fs from 'fs'
import { parse, stringify } from 'flatted/esm'
import axios from 'axios'

const options = {
  method: 'get',
  url: 'https://football98.p.rapidapi.com/laliga/table',
  headers: {
    'x-rapidapi-key': '8a8081e2bbmsh9728102424d0ab2p190342jsn18004474f5d2',
    'x-rapidapi-host': 'football98.p.rapidapi.com'
  }
}
let leagueArr = ['premierleague', 'laliga', 'ligue1ubereats', 'seriea', 'ligaportugal']
let dataArr = []



async function fetchSeasons() {
  for (let i = 0; i < 5; i++) {
    let options = {
      method: 'get',
      url: `https://football98.p.rapidapi.com/${leagueArr[i]}/table`,
      headers: {
        'x-rapidapi-key': '8a8081e2bbmsh9728102424d0ab2p190342jsn18004474f5d2',
        'x-rapidapi-host': 'football98.p.rapidapi.com'
      }
    }
    let data = await axios.request(options)
    await dataArr.push(data.data)
  }

  await fs.writeFile('./seasons_data.json', JSON.stringify(dataArr),
    error => {
      if (error) throw error
      else console.log('Success')
    }
  )
}

fetchSeasons()
