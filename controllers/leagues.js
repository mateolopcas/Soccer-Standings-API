import League from "../models/League.js";

export const getLeagues = async (req, res) => {
  try {
    const leagues = await League.find();
    res.json(leagues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getLeague = async (req, res) => {
  try {
    const { id } = req.params;
    const league = await League.findById(id)
    if (league) {
      return res.json(league);
    }
    res.status(404).json({ message: "League not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createLeague = async (req, res) => {
  try {
    const league = new League(req.body);
    await league.save();
    res.status(201).json(league);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateLeague = async (req, res) => {
  try {
    const { id } = req.params;
    const league = await League.findByIdAndUpdate(id, req.body);
    res.status(201).json(league);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteLeague = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await League.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("League deleted!");
    }

    throw new Error("League not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
