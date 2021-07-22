const mongoose = require("mongoose");
const detailsSchema = require("./schema")

const user_details = mongoose.model("user_details", detailsSchema);

module.exports = user_details;