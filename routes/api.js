const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const Goals = require("../models/goals");

//define budget route to add transaction
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

//define budget route to get specific user transaction
router.get("/api/transaction/:id", (req, res) => {
  const { id } = req.params;
  Transaction.find({ userID: id })
    .sort({ date: -1 })
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//define goal route to add new goal
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

//define goal route to get goal by user
router.get("/api/all-goals/:userID", (req, res) => {
  const { userID } = req.params;

  Goals.find({ userID: userID }).then((data) => {
    res.json(data);
  });
});

//definte route to delete goal by user
router.delete("/api/delete-goal/:id", (req, res) => {
  const { id } = req.params;

  Goals.findByIdAndDelete({ _id: id })
    .then(() => console.log("done"))
    .catch((err) => console.log(err));
});



module.exports = router;
