import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  private companyName: string;
  private catchPhrase: string;
  public location: {
    lat: number,
    lng: number
  }

  public setCompany(): void {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  public getCompany(): void {
    console.log(`Company name: ${this.companyName}`);
    console.log(this.catchPhrase);    
    console.log(this.location);    
  }

  public getCompanyLocation(): Object {
    return this.location;
  }

  public markerContent(): string {
    return `
    <div>
      <h1>Company name is: ${this.companyName}</h1>
      <h3>Catch phrase is: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}