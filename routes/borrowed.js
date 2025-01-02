const express = require('express');
const db = require('../db');
const router = express.Router()
const { insertquery } = require('../functions (B&L)');
const CategoryType = 'BORROWED';

router.post('/', async (req,res) => {
    const {userName, amount, date, description, Status} = req.body;
    const idName = 'BORId'
    
    const result = await insertquery(CategoryType, idName, userName, amount, date, description, Status)

    if (result.success) {
        res.status(200).json({ message: 'Borrowed Added Successfully.'});
    } else {
        res.status(400).json({ message: 'Error Adding Borrowed.' });
    }
})

module.exports = router;