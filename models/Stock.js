const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Make Schema
// const StockSchema = new Schema({
//     ticker_symbol: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     opening_price: {
//         type: Number,
//         required: true,
//     },
// });

// module.exports = Stock = mongoose.model("stocks", StockSchema);

const heldStockSchema = new Schema({
    symbol: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
    open_price: {
        type: Number,
        required: true,
    },
});

module.exports = HeldStock = mongoose.model("heldStocks", heldStockSchema);
