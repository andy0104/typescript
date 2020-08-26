class Vehicle {
  drive(): void {
    console.log('drive car');        
  }

  honk(): void {
    console.log('beeep!');
    
  }
}

const car = new Vehicle();
car.drive();
car.honk();

// Inheritance
class Civic extends Vehicle {
  // method overriding
  drive(): void {
    console.log('drive civic!!');
  }
}

const civic1 = new Civic();
civic1.drive();

// Access modifiers
// public --> method/objects can be called from abywhere of the class or child classes
// private --> method/object can be called only from the class where it is defined
// protected --> method/object can be called from the class where it is defined or from the child classes
