const express = require('express');
const db = require('../db');
const router = express.Router()
const { insertquery } = require('../functions (B&L)');
const CategoryType = 'LENT';

router.post('/', async (req,res) => {
    const {userName, amount, date, description, Status} = req.body;
    const idName = 'LENId'
    
    const result = await insertquery(CategoryType, idName, userName, amount, date, description, Status)

    if (result.success) {
        res.status(200).json({ message: 'Lending Added Successfully.'});
    } else {
        res.status(400).json({ message: 'Error Adding Lending.' });
    }
})

module.exports = router;