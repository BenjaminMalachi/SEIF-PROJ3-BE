const JournalEntry = require("../daos/journalentry");

module.exports = {
  getJournalEntry,
  getJournalEntryById,
  createJournalEntry,
  getJournalEntriesByUserAndMonth
};

// This function will return a promise that resolves to the list of entries that match the query fields
function getJournalEntry(queryFields) {
    return JournalEntry.find(queryFields);
}

// This function will return a promise that resolves to the journal entry object that was created
function createJournalEntry(journalEntryData) {
    return JournalEntry.create(journalEntryData);
}

// This function will return a promise that resolves to the journal entry object with the specified ID
function getJournalEntryById(id) {
    return JournalEntry.findById(id);
}

function getJournalEntriesByUserAndMonth(userId, year, month) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return JournalEntry.find({
        user_id: userId,
        date: { $gte: startDate, $lte: endDate }
    }).sort({ date: -1 });
}