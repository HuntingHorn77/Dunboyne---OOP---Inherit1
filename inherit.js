class Car {
    constructor (brand, year) {
        this.carMake = brand
    }

    whatCar() {

        return "This car is a " + this.carMake

    }
}

class Model extends Car {

    constructor(brand, model) {
        super(brand)
        this.model = model


    }

    makeModel() {

        return this.whatCar() + " " + this.model
    }






}

var liamsCar = new Model("Nissan", "Skyline")
console.log(liamsCar.makeModel())