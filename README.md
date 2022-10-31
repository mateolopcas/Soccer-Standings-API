# Soccer-Standings-API

## About

A RESTful API for top European soccer league standings with full CRUD functionality.
Seeded from [this API](https://rapidapi.com/GiulianoCrescimbeni/api/football98).

## Usage

Deployed website here:
https://soccer-standings-api-production.up.railway.app/

Endpoints:
Right now you can search for a specific league by ID, but not specific teams inside the standings array. So you need to copy and paste the standings, then make edits.

```
router.use("/leagues", leaguesRoutes)
```
```
router.get("/", controllers.getLeagues);
router.get("/:id", controllers.getLeague);
router.post("/", controllers.createLeague);
router.put("/:id", controllers.updateLeague);
router.delete("/:id", controllers.deleteLeague);
```

So for example, a GET request at https://localhost:3000/leagues would display all leagues. The model for a league and team is below:

```
let Team = new mongoose.Schema ({
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
```

## Future Improvements

Add search by league name. Add search by team ID or name. Add more leagues.
