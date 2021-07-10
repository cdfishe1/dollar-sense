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
  const { userID } = req.params;

  Goals.find({ userID: userID }).then((data) => {
    res.json(data);
    console.log(data);
  });
});

router.delete("/api/delete-goal/:id", (req, res) => {
  const { id } = req.params;

  Goals.findByIdAndDelete({ _id: id })
    .then(() => console.log("done"))
    .catch((err) => console.log(err));
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
