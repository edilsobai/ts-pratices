interface IForm {
  login: string;
  password: string;
}

const validateData: ValidationForm<IForm> = {
 login: {isTrue: true},
 password: {isTrue: false, errorMsg: "Invalid password"} 
}

type ValidationForm<T> = {
  [P in keyof T]: {isTrue: true} | {isTrue: false, errorMsg: string}
}