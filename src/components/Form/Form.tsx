import * as S from "./styles";
import * as Yup from "yup";
import { Formik, Form as FormContainer } from "formik";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: Yup.string().required("Password cannot be empty"),
});

const Form = () => {
  return (
    <S.Container>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <FormContainer>
            <S.Input
              name="firstName"
              placeholder="First Name"
              $error={errors.firstName && touched.firstName}
            />
            {errors.firstName && touched.firstName ? (
              <S.Error>{errors.firstName}</S.Error>
            ) : null}
            <S.Input
              name="lastName"
              placeholder="Last Name"
              $error={errors.lastName && touched.lastName}
            />
            {errors.lastName && touched.lastName ? (
              <S.Error>{errors.lastName}</S.Error>
            ) : null}
            <S.Input
              name="email"
              type="email"
              placeholder="Email Address"
              $error={errors.email && touched.email}
            />
            {errors.email && touched.email ? (
              <S.Error>{errors.email}</S.Error>
            ) : null}
            <S.Input
              name="password"
              type="password"
              placeholder="Password"
              $error={errors.password && touched.password}
            />
            {errors.password && touched.password ? (
              <S.Error>{errors.password}</S.Error>
            ) : null}
            <S.Button type="submit">CLAIM YOUR FREE TRIAL</S.Button>
          </FormContainer>
        )}
      </Formik>
      <S.Text>
        By clicking the button, you are agreeing to our{" "}
        <a href="/">Terms and Services</a>
      </S.Text>
    </S.Container>
  );
};

export default Form;
