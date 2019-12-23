//Block of code 1
const user = {
    name: 'John',
    cities: ['Miami', 'Denver', 'Seattle'],
    //When adding an ES5 function to an object property, 'this' is bound to the object. In this case the object is user.
    printName: function () {
        console.log(this.name)
    }
}

user.printName()

//Block of code 2
const user1 = {
    name: 'John',
    cities: ['Miami', 'Denver', 'Seattle'],
    printName: function () {
        console.log(this.name)
        //The below function is not 'added' to the object property, therefore 'this' is not bound to the object (user1)
        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city)
        })
    }
}

user1.printName() //Running this code in Jupyter notebooks this.name inside the forEach will produce undefined.
// Running the same code in Node.js or the browser will produce Uncaught TypeError: 
//Cannot read property 'name of undefined'

//Block of code 3
//Modifying the forEach callback function of block of code 2. Changing the function from ES5 to ES6 arrow function
const user2 = {
    name: 'John',
    cities: ['Miami', 'Denver', 'Seattle'],
    printName: function () {
        console.log(this.name)
          this.cities.forEach((city) => {
          console.log(this.name + ' has lived in ' + city)
        })
    }
}

user2.printName()

const user3 = {
    name: 'John',
    cities: ['Miami', 'Denver', 'Seattle'],
    printName: () => {
          this.cities.forEach((city) => {
          console.log(this.name + ' has lived in ' + city)
        })
    }
}

user3.printName() //This will produce an error.
//Why?
//Since arrow functions do not bind `this` to the object. In this case the arrow function will go to its
//parent scope. In this case is the global scope.
