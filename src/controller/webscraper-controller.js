const service = require('../service/webscraper-service');

const getLenovoNotebooks = async (req, res) => {
    try {
        const notebooks = await service;
        return await res.status(200).json(notebooks);
    } catch (error) {
        res.send(error.message);
    };
}

module.exports = getLenovoNotebooks;