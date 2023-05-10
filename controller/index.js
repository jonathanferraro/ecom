const {get} = require('../model/ecom.js');

exports.read = async (req, res) => {
    try {
        const item = await get();
        return res.json({data: item.rows})
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    };
};