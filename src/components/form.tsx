import styled from "@emotion/styled";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }: any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="centerDiv">
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
  text-aligh: center;
`;

const MySelect = ({ label, ...props }: any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

interface Props {
  dispatch: any;
  userData: any;
  editStatus: boolean;
}

// And now we can use these
const SignupForm = ({ dispatch, userData, editStatus }: Props) => {
  const initialValues: any = {
    name: userData?.name ?? "",
    class: userData?.class ?? "",
    gender: userData?.gender ?? "",
    email: userData?.email ?? "",
  };

  // useEffect(() => {
  //   if (singleData) {
  //     singleDatasetReloadForm(true);
  //     setInitialValues(singleData);
  //     setTimeout(function () {
  //       setReloadForm(false);
  //     }, 10);
  //   }
  // }, [singleData]);

  return (
    <>
      <div className="centerDiv">
        <h1>Test Form</h1>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 20 characters or less")
              .required("Required"),
            class: Yup.number()
              .max(12, "Must be upto 12th")
              .required("Required"),
            gender: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            if (editStatus)
              dispatch({ type: "SETSINGLEUSERDATA", payload: values });
            else dispatch({ type: "ADD", payload: values });

            resetForm();
          }}
        >
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <br />

            <MyTextInput
              label="Class"
              name="class"
              type="text"
              placeholder="Class"
            />
            <br />

            <MySelect label="Gender" name="gender">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </MySelect>

            <br />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
            <br />

            <button type="submit">{editStatus ? "Edit" : "Submit"}</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignupForm;
