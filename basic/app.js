const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);
// app.use("/", indexRouter);

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.statusCode || 500).send(err.message);
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
