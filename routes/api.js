const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const Goals = require("../models/goals");
//const Firebase = require("../client/src/Firebase")
//import firebase, { auth } from "../client/src/Firebase.js";
//const { auth } = require("../client/src/Firebase.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
      console.log(err);
    });
});

router.post("/api/new-goal", ({ body }, res) => {
  Goals.create(body)
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
      console.log(err);
    });
});

router.get("/api/all-goals/:userID", (req, res) => {
  console.log("line 31", req.params);
  console.log(typeof req.params);
  const { userID } = req.params;
  console.log(typeof userID);
  Goals.find({ userID: userID }).then((data) => res.json(data));
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then((dbTransaction) => {
//       res.json(dbTransaction);
//     })
//     .catch((err) => {
//       //
//       res.status(404).json(err);
//     });
// });

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
