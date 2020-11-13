import mongoose from "mongoose";

const MonsterModel = mongoose.model("Monster", {
  name: String,
  level: Number,
  imageSrc: String,
  normal: {
    maxHitPoint: Number,
    baseMove: Number,
    baseAttack: Number,
    bonuses: [String],
  },
  elite: {
    maxHitPoint: Number,
    baseMove: Number,
    baseAttack: Number,
    bonuses: [String],
  },
});

// const monsterSchema = new mongoose.Schema({
//   name: String,
//   level: Number,
//   imageSrc: String,
//   normal: {
//     maxHitPoint: Number,
//     baseMove: Number,
//     baseAttack: Number,
//     bonuses: [String],
//   },
//   elite: {
//     maxHitPoint: Number,
//     baseMove: Number,
//     baseAttack: Number,
//     bonuses: [String],
//   },
// });

export default MonsterModel;
