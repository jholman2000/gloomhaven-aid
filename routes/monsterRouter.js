import express from "express";

const monsterRouter = express.Router();

// Get all
monsterRouter.get("/", (req, res) => {
  res.send("Boo! There are monsters");
});

// Get one
monsterRouter.get("/:id", (req, res) => {
  res.send(`I am monster ${req.params.id}`);
});

// Create
monsterRouter.post("/", (req, res) => {});

// Update
monsterRouter.patch("/:id", (req, res) => {});

// Delete
monsterRouter.delete("/:id", (req, res) => {});

export default monsterRouter;
