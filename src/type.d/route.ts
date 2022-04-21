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
  status?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IaddPost {
  title: string;
  area: string;
  link: string;
  date: string;
}
