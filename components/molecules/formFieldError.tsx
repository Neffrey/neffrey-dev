// FRAMEWORK
import React from "react";
import { useField } from "formik";
import { FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";

// FORM VALUES
interface FieldErrorPropTypes {
  error: string | undefined;
}

// COMPONENT FUNCTION
const FormFieldError = ({ error }: FieldErrorPropTypes) => {
  return error ? (
    <Text
      variant="error"
      marginBottom={1}
      marginLeft={0}
      marginInlineStart={0}
      marginStart={0}
      sx={{ marginInlineStart: "0!important" }}
    >
      {error}
    </Text>
  ) : (
    <></>
  );
};

export default FormFieldError;
