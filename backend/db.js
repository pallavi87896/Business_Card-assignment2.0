const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://singhpallavi8195:mongodb08@cluster0.xbsxwgn.mongodb.net/cards")
const cardSchema=mongoose.Schema({name: String,
  description: String,
  interests: [String],
  linkedIn: String,
  github: String
});
const dbCard=mongoose.model('cards',cardSchema);
module.exports=({
  dbCard
});