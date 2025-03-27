const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Here is the index?");
});

module.exports = indexRouter;
