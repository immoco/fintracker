const express = require('express');
const db = require('../db');
const router = express.Router()
const { insertquery } = require('../functions (S&I)');
const CategoryType = 'INVESTMENT';

router.post('/', async (req,res) => {
    const {userName, amount, date, description} = req.body;
    const idName = 'INVId'
    
    const result = await insertquery(CategoryType, idName, userName, amount, date, description)

    if (result.success) {
        res.status(200).json({ message: 'Investment Added Successfully.'});
    } else {
        res.status(400).json({ message: 'Error Adding Investment.' });
    }
})

module.exports = router;