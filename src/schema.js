const mongoose = require("mongoose");

const { Schema } = mongoose;

const detailsSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },

    email : {
        type: String,
        minlength: 2,
        required: true
    },
})

module.exports = detailsSchema