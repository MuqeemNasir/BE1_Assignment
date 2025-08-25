const mongoose = require('mongoose')
const { initializeDatabase } = require('./db/db.connect')
const fs = require('fs')
const Car = require('./models/cars.models')

initializeDatabase()

// const jsonData = fs.readFileSync('cars.json', 'utf-8')
// const carsData = JSON.parse(jsonData)

// function seedData(){
//     try{
//         for(const carData of carsData){
//             const newCar = new Car({
//                 brand: carData.brand,
//                 model: carData.model,
//                 year: carData.year,
//                 bodyStyle: carData.bodyStyle,
//                 fuelType: carData.fuelType,
//                 transmission: carData.transmission,
//                 engine: carData.engine,
//                 mileage: carData.mileage,
//                 color: carData.color,
//                 price: carData.price,
//                 condition: carData.condition,
//                 description: carData.description,
//                 photos: carData.photos,
//                 inMarket: carData.inMarket,
//             })
//             // console.log(newCar.brand)
//             newCar.save()
//         }
//     }
//     catch(error){
//         console.log("Error seeding in data", error)
//     }
// }

// seedData()

// BE2_Assignment

const carData1 = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

async function manageCarData(newCar){
    try{
        const car = new Car(newCar)
        const saveCar = await car.save()
        console.log("New Car Data: ", saveCar)
    }catch(error){
        throw error
    }
}

// Question 1 & 2

async function seedCar(){
    await manageCarData(carData1)
    await manageCarData(carData2)
    mongoose.connection.close()
}

// seedCar()

// Question 3:

async function getAllCars(){
    try{
        const allCar = await Car.find()
        console.log("All Car: ", allCar)
    }catch(error){
        console.log("Error in getting All Car.", error)
    }
}

// getAllCars()

// Question 4: 

async function getCarByBrand(carBrand){
    try{
        const nameOfBrand = await Car.find({brand: carBrand})
        console.log(`Car details of Brand "${carBrand}": `, nameOfBrand)
    }catch(error){
        console.log("Error in getting Car by Brand.", error)
    }
}

// getCarByBrand("Ford")

// Question 5: 

async function getCarByColor(carColor){
    try{
        const colorOFCar = await Car.find({color: carColor})
        console.log(`Car details of Color "${carColor}": `, colorOFCar)
    }catch(error){
        console.log("Error in getting Car by Color.", error)
    }
}

// getCarByColor("Black")

// Question 6: 

async function updateCarByModelForPrice(carModel, dataToUpdate){
    try{
        const carPrice = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true})
        console.log(`Car model "${carModel}" with Updated price: `, carPrice)
    }catch(error){
        console.log("Error in Changing Price of CarModel", error)
    }
}

// updateCarByModelForPrice("Corolla", {price: "2300000"})

// Question 7: 

async function updateCarByModelForCondition(carModel, dataToUpdate){
    try{
        const carCondition = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true})
        console.log(`Car model "${carModel}" with updated its condition: `, carCondition)
    }catch(error){
        console.log("Error in Updating Car Condition of CarModel", error)
    }
}

// updateCarByModelForCondition("Model S", {condition: "used"})

// Question 8:

async function deleteCarById(carId){
    try{
        const deletedCar = await Car.findByIdAndDelete(carId)
        console.log("Deleted Car by ID: ", deletedCar)
    }catch(error){
        console.log("Error in Deleting Car by ID.", error)
    }
}

// deleteCarById("68a71072b639a856b2260ebd")

// Question 9: 

async function deleteCarByBodyStyle(carBodyStyle){
    try{
        const deletedCar = await Car.findOneAndDelete({bodyStyle: carBodyStyle})
        console.log("Deleted Car by BodyStyle: ", deletedCar)
    }catch(error){
        console.log("Error in Deleting Car by BodyStyle.", error)
    }
}

// deleteCarByBodyStyle("Coupe")