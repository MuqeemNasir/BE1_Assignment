const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    year: {
        type: Number,
        required: true
    },
    bodyStyle: {
        type: String,
        enum: ["Sedan", "Hatchback", "SUV", "Coupe", "Truck", "Convertible", "Wagon", "Van"],
        required: true,
    },
    fuelType: {
        type: String,
        enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid'],
        default: "Gasoline",
    },
    transmission: {
        type: String,
        enum: ['Automatic', 'Manual'],
        default: "Automatic",
    },
    engine: {
        type: String,
        trim: true,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
        min: 0,
    },
    color: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    condition: {
        type: String,
        enum: ['New', 'Used'],
        default: "New",
    },
    description: {
        type: String,
        trim: true,
    },
    photos: [{
        type: String,
        trim: true,
    }],
    inMarket: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true})

const Car = mongoose.model('Car', carsSchema)

module.exports = Car