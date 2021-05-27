import { WebcamImage } from "ngx-webcam";

export interface UserModel {
  name: string,
  passportNumber: string,
  phoneNumber: string,
  id: string,
  password: number,
  img: string,
  age: number,
  country: string,
  city: string,
  graduationYear: number,
  academicInstitution: string,
  medicalInstitution: string,
  residancy: string,
  department: string,
  residancyYear: number,
  practices: {date: Date, title: string, score: number}[],
  tests: {date: Date, title: string, score: number}[],
}
