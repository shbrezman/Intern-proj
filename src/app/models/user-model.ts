import { testModel } from './test-model';

export class UserModel {
  name: string;
  passportNumber: string;
  token: string;
  phoneNumber: string;
  id: string;
  password: number;
  roleType: string;
  roleNumber: number;
  img: string;
  age: number;
  country: string;
  city: string;
  graduationYear: number;
  academicInstitution: string;
  medicalInstitution: string;
  residancy: string;
  department: string;
  residancyYear: number;
  practices: testModel[];
  tests: testModel[];
}
