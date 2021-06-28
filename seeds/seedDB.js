const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/user"
);

const userSeed = [
  {
    name: "Mow Lawn",
    value: 20,
    date: new Date(Date.now())
  },
  {
    name: "Wash Dishes",
    value: 2,
    date: new Date(Date.now())
  },
  {
    name: "Lunch",
    value: -5,
    date: new Date(Date.now())
  },
  {
    name: "Games",
    value: -10,
    date: new Date(Date.now())
  },
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
