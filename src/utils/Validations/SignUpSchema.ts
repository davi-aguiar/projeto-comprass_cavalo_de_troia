import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Your name is not valid, use only letters and numbers"),
  email: yup
    .string()
    .required("Provide an email")
    .email("Your email is not valid"),
  password: yup
    .string()
    .required("Provide an password")
    .min(6, "Your password must be longer than 6 digits."),
  confirm_password: yup
    .string()
    .required("Your password is not the same as your confirmation")
    .oneOf([yup.ref("password"), ""], "Passwords must match")
});
