interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}

interface Directors extends Teacher{
  numberOfReports: number;
}

interface printTeacherFunction {
  // biome-ignore lint/style/useShorthandFunctionType: <explanation>
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>{
  return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface{
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string){
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string{
    return 'Currently working'
  }

  displayName(): string{
    return this._firstName
  }
}
