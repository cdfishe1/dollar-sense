const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const Goals = require("../models/goals");
//import { auth } from "../../Firebase";
//const auth = require("../");

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

router.get("/api/all-goals", (req,res)=>{
  Goals.find({
    
  })
})

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
