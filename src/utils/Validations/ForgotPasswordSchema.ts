import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Provide an email")
    .email("Not a valid email address. Should be your@email.com"),

  password: yup
    .string()
    .required("Check the password input")
    .min(6, "Your password must be longer than 6 digits"),

  confirm_password: yup
    .string()
    .required("Your password is not the same as your confirmation")
    .oneOf(
      [yup.ref("password"), ""],
      "New password is not the same as your confirmation"
    )
});
