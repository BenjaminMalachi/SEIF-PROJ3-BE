const modelJournalEntry = require("../models/journalentry");
const modelDayCards = require("../models/daycard");

module.exports = {
    getJournalEntry,
    createJournalEntry,
    getJournalEntriesByUserAndMonth
};

async function getJournalEntry(req, res) {
    console.log(req.path); 
    console.log('Entry ID received:', req.params.entryId);
    try {
        const journalEntry = await modelJournalEntry.getJournalEntryById(req.params.entryId);
        if (!journalEntry) {
            return res.status(404).send('Entry not found');
        }
        res.json(journalEntry);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createJournalEntry(req, res) {
    try {
        // Create the journal entry
        const journalEntry = await modelJournalEntry.createJournalEntry(req.body);

        // Update the corresponding day card to reflect the journalentry_id
        await modelDayCards.updateDayCardWithJournalEntry(journalEntry._id, req.body.card_id);

        res.status(201).json(journalEntry);
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getJournalEntriesByUserAndMonth(req, res) {
    const { userId, year, month } = req.params;
    try {
        const entries = await modelJournalEntry.getJournalEntriesByUserAndMonth(userId, parseInt(year), parseInt(month));
        res.json(entries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMsg: err.message });
    }
}