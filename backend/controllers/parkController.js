//lay tat ca cong vien
const Park = require("../models/Park");

exports.getAllParks = async (req, res) => {
    try {
        const parks = await Park.find();
        res.json(parks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//lay 1 cong vien theo id
exports.getParkById = async (req, res) => {
    try {
        const park = await Park.findById(req.params.id);

        if (!park) {
            return res.status(404).json({
                message: "Park not found"
            });
        }

        res.json(park);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// them cong vien
exports.createPark = async (req, res) => {

    try {

        const park = new Park(req.body);

        await park.save();

        res.status(201).json(park);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};