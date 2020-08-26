import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
user.setName();
user.getName();
const userLoc = user.getLocation();

const company = new Company();
company.setCompany();
company.getCompany();
const companyLoc = company.getCompanyLocation();

const map = new CustomMap();
map.createMapMarker(user);
map.createMapMarker(company);

