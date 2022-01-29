import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  password1: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  firstName: yup
    .string("Enter your First Name")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .required("Last Name is required"),
});

export default schema;
