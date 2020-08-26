interface Vehicle {
  name: string;
  year: string;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: '2000',
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
console.log(oldCivic.summary());
