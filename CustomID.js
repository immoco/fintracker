function generateCustomID(userName, CategoryType) {
    const Name = userName.slice(0, 3).toUpperCase();
    const Ctype = CategoryType.slice(0, 3);
    const Timestamp = new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000).toISOString().slice(11, 19).replace(/:/g, "");
    return `${Name}${Ctype}${Timestamp}`;
}

module.exports = {
    generateCustomID
}