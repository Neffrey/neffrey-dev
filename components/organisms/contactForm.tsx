// FRAMEWORK
import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";

// MY COMPONENTS
import FormikInput from "components/molecules/formikInput";
import FormikTextArea from "components/molecules/formikTextArea";

// FORM VALUES &
interface ValueTypes {
  sender: string;
  message: string;
}
const initialValues = {
  sender: "",
  message: "",
};

// COMPONENT FUNCTION
const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log("Formik Submission", { values, actions });
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        sender: Yup.string()
          .min(2, "Too Short!")
          .max(15, "Must be 15 characters or less")
          .required("* Field is Required"),
        message: Yup.string()
          .min(2, "Too Short!")
          .max(20, "Must be 20 characters or less")
          .required("* Field is Required"),
      })}
    >
      {(props: FormikProps<ValueTypes>) => (
        <form onSubmit={props.handleSubmit}>
          <FormikInput
            label="Formik Input Comp"
            name="sender"
            type="text"
            placeholder="Enter your first name"
            marginBottom={5}
          />
          <FormikTextArea
            label="Formik TextArea Comp"
            name="message"
            type="text"
            placeholder="Send a message"
            marginBottom={5}
          />
          <Button type="submit" variant="cyanBtn" width="full" marginTop={2}>
            Send Message
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
