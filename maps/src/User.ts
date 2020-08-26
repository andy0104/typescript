import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  private name: string;
  public location: {
    lat: number,
    lng: number
  }

  public setName(): void {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  public getName(): string {
    return this.name;
  }

  public getLocation(): Object {
    return this.location;
  }

  public markerContent(): string {
    return `
    <div>
      <h1>User name is: ${this.name}</h1>      
    </div>
    `;
  }
}