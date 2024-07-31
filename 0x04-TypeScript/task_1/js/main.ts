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
