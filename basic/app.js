const express = require("express");
const app = express();
// const authorRouter = require("./routes/authorRouter");
// const bookRouter = require("./routes/bookRouter");
// const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);
// app.use("/", indexRouter);

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.statusCode || 500).send(err.message);
// });
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
