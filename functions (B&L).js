const db = require('./db');
const {generateCustomID} = require('./CustomID')

async function insertquery(CategoryType, idName, userName, amount, date, description, Status) {
    try {
        const customID = generateCustomID(userName, CategoryType)
        const query = `Insert into ${CategoryType} (${idName}, userName, amount, date, description, Status) values ($1, $2, $3, $4, $5, $6)`

        await db.query(query, [customID, userName, amount, date, description, Status]);

        await db.query(`Insert into debt_repayments(DebtID, userName, DebtType, Amount, date,  Description, Status) values ($1, $2, $3, $4, $5, $6, $7)`,
        [customID, userName, CategoryType, amount, date, description, Status]);

        return {success: true};
            
    } catch(error) {
        console.log(error)
        return {success: false};
    }
}

module.exports = {
    insertquery
}