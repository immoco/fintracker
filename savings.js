const express = require('express');
const db = require('../db');
const router = express.Router()
const { insertquery } = require('../functions (S&I)');
const CategoryType = 'SAVING';

router.post('/', async (req,res) => {
    const {userName, amount, date, description} = req.body;
    const idName = 'SAVId'
    
    const result = await insertquery(CategoryType, idName, userName, amount, date, description)

    if (result.success) {
        res.status(200).json({ message: 'Savings Added Successfully.'});
    } else {
        res.status(400).json({ message: 'Error Adding Savings.' });
    }
})

module.exports = router;