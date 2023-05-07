const mongoose = require('mongoose')

const placesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: ["Please enter a place name:"],
        },
        location: {
            type: String,
        },
        country: {
            type: String,
        },
          timestamps: {
            type: String,
        }
});

const Places = mongoose.model('Places',placesSchema)
module.exports = Places;