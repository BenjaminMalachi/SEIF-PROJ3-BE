var express = require('express');
var journalController = require('../controllers/journalentry')

var router = express.Router();

router.get("/:entryId", journalController.getJournalEntry); // Specific entry by ID
router.get("/", journalController.getJournalEntry); // General search or get all entries
router.post("/create-journal-entry", journalController.createJournalEntry);
router.get("/user/:userId/month/:month/year/:year", journalController.getJournalEntriesByUserAndMonth);

module.exports = router;

//to test on postman
// {
//     "user_id": "65a677619646798d1980e068",
//     "card_id": "65a6aa0d2302804f074118af",
//     "entry_title": "testing FIRSTTTT for foreign key",
//     "entry_description": "test test test",
//     "entry_text": "testingggg",
//     "date": "2024-01-16"
//   }
  