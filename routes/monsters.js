import express from "express";
const router = express.Router();
import Monster from "../models/monster.js";

/*
 * Middleware
 */
async function getMonster(req, res, next) {
  let monster;
  try {
    monster = await Monster.findById(req.params.id);

    if (monster === null)
      return res
        .status(404)
        .json({ message: `Cannot find monster with id ${req.params.id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  // Add the found monster to the response and then next() to any remaining items
  res.monster = monster;
  next();
}

// Get all
router.get("/", async (req, res) => {
  try {
    const monsters = await Monster.find();
    console.info("Retrieving all monsters...");
    res.json(monsters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one
router.get("/:id", getMonster, (req, res) => {
  res.send(res.monster);
});

// Create
router.post("/", async (req, res) => {
  const monster = new Monster({
    name: req.body.name,
    level: req.body.level,
    imageSrc: req.body.imageSrc || "",
    normal: {
      maxHitPoint: req.body.normal.maxHitPoint,
      baseMove: req.body.normal.baseMove,
      baseAttack: req.body.normal.baseAttack,
      bonuses: req.body.normal.bonuses,
    },
    elite: {
      maxHitPoint: req.body.elite.maxHitPoint,
      baseMove: req.body.elite.baseMove,
      baseAttack: req.body.elite.baseAttack,
      bonuses: req.body.elite.bonuses,
    },
  });

  try {
    const newRecord = await monster.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update
router.patch("/:id", getMonster, (req, res) => {});

// Delete
router.delete("/:id", getMonster, async (req, res) => {
  try {
    await res.monster.remove();
    res.json(`Deleted monster ${req.params.id}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
