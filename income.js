const express = require('express');
const db = require('../db');
const router = express.Router();
const { addcategory, insertquery } = require('../functions (I&E)');
const CategoryType = 'INCOME';

router.post('/addcategory', async (req,res) =>{
    const {categoryName} = req.body;
    const result = await addcategory(categoryName, CategoryType)

    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(400).json({ message: result.message });
    }
})

router.post('/', async (req,res) => {
    const {userName, amount, categoryName, date, description} = req.body;
    const idName = 'incId'
    
    const final = await insertquery(CategoryType, idName, userName, amount, categoryName, date, description)

    if (final.success) {
        res.status(200).json({ message: 'Income Added Successfully.'});
    } else {
        res.status(400).json({ message: 'Error Adding Income' });
    }  
})


module.exports = router;