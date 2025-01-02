const express = require('express');
const router = express.Router();
const db = require('../db')

async function getdata(userName, CategoryType) {
    try {
        const query = `SELECT * FROM ${CategoryType} WHERE Username = $1 ORDER BY Date DESC`;
        const result = await db.query(query, [userName]);

        if (result.rows.length === 0) {
            return { success: false, message: `No ${CategoryType} data found for ${userName}.` };
        }

        return { success: true, rows: result.rows }; 

    } catch (error) {
        console.log(error);
        return { success: false, message: 'Internal Server Error' };
    }
}

router.get('/:CategoryType', async (req,res) => {
    const {userName} = req.query;
    const {CategoryType} = req.params;
    console.log('Received userName:', userName);
    console.log('Received Category:', CategoryType);

    const result = await getdata(userName, CategoryType)

    if (result.success){
        res.json(result.rows)
    }else{
        res.status(500).json({message: result.message});
    }
})

module.exports = router;
