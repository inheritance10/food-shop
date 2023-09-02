

import * as Yup from 'yup'
export const registerValidate =Yup.object().shape({
    username: Yup.string()
      .required("Username required target")
      .min(4, "Username must be 4 character"),
    email: Yup.string()
      .email("Enter valid email address")
      .required("Email required target"),
    password: Yup.string()
      .required("Password required")
      .min(6, "Password must be min 6 character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords don't matches")
      .required("Password confirm required target"),
  });
