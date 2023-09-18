// function takes in an array of objects containing car mileage data
// and outputs an object with some analysis

const cars = [
  {make: "Toyota",    model: "Camry",   year: "2020", mileage: 30800},
  {make: "Honda",     model: "Civic",   year: "2019", mileage: 32000},
  {make: "Chevrolet", model: "Impala",  year: "2021", mileage: 17500},
  {make: "Audi",      model: "R8",      year: "2020", mileage: 13000},
  {make: "Tesla",     model: "Model 3", year: "2018", mileage: 50000}
]

function mileageReport(data){
  let report = {
    average: 0,
    highest: cars.reduce((car, lastCar) => 
    car.mileage > lastCar.mileage ? car : lastCar).make,
    lowest: cars.reduce((car, lastCar) => 
    car.mileage < lastCar.mileage ? car : lastCar).make,
    total: 0
  }

  data.forEach((datum) => {
  report.average += datum.mileage / data.length
  report.total += datum.mileage
  })
  return report
}

console.log(mileageReport(cars))