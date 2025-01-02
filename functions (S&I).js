const db = require('./db');
const {generateCustomID} = require('./CustomID')

async function insertquery(CategoryType, idName, userName, amount, date, description) {
    try {
        const customID = generateCustomID(userName, CategoryType)
        const query = `Insert into ${CategoryType} (${idName}, userName, amount, date, description) values ($1, $2, $3, $4, $5)`

        await db.query(query, [customID, userName, amount, date, description]);
        return {success: true};
            
    } catch(error) {
        console.log(error)
        return {success: false};
    }
}

module.exports = {
    insertquery
}