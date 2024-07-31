interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
}
