const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", (request, response) => {
  console.log("Get request called");
  let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  response.json(savedNotes);
});

router.post("/api/notes", () => {
  console.log("post request called");
});

module.exports = router;
