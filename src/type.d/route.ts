export interface Route {
  name: string;
  path: string;
  Element: any;
}

export interface IaddingUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  agreement: boolean;
  password?: string;
  confirmPassword?: string;
}
