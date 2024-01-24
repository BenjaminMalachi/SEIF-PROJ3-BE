const modelDayCards = require("../models/daycard")

module.exports = {
    getCardID,
    createCardID
}

async function getCardID(req, res) {
    let cardData; // Declare cardData outside the try block
    console.log("Request for getCardID:", req.query);
    try {
        cardData = await modelDayCards.getCardID(req.query);
        res.json({card: cardData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
    console.log("Response from getCardID:", cardData);
}

async function createCardID(req, res) {
    console.log("Request for createCardID:", req.body);
    try {
        const cardData = await modelDayCards.createCardID(req.body);
        res.redirect('/daycard'); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}
