const db = require('./db');
const {generateCustomID} = require('./CustomID')

async function addcategory(categoryName, CategoryType) {
    try {
        const existingCategory = await db.query('SELECT CategoryName from categories where categoryName = $1', [categoryName]);

        if(existingCategory.rowCount > 0) {
            return {success: false, message: 'Category Already existed!'}
        }

        await db.query(
            'Insert into Categories (categoryName, CategoryType) values ($1, $2)', 
            [categoryName, CategoryType]
        );
        return {success: true, message: 'Category Added Successfully.'};
    
        } catch(error) {
            console.log(error)
            return {success: false, message: 'Error Adding Category'};
        }
}

async function insertquery(CategoryType, idName, userName, amount, categoryName, date, description) {
    try {
        const customID = generateCustomID(userName, CategoryType)
        const query = `Insert into ${CategoryType} (${idName}, userName, amount, categoryName, date, description) values ($1, $2, $3, $4, $5, $6)`

        await db.query(query, [customID, userName, amount, categoryName, date, description]);
        return {success: true};

    } catch(error) {
        console.log(error)
        return {success: false};
    }
}

module.exports = {
    addcategory, insertquery
}