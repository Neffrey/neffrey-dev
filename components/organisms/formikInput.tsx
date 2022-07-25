// FRAMEWORK
import React from "react";
import { useField } from "formik";
import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

// MY COMPONENTS
import FormFieldError from "components/molecules/formFieldError";

// FORM VALUES
interface InputPropTypes {
  label: string;
  isRequired?: boolean;
  multiple?: boolean;
  name: string;
  type?: string;
  value?: string;
  [x: string]: any;
  validate?: (value: any) => undefined | string | Promise<any>;
}

// COMPONENT FUNCTION
const FormikInput = ({
  label,
  isRequired = false,
  ...props
}: InputPropTypes) => {
  // Connect Formik
  const [field, meta] = useField(props);
  console.log("INPUT req: ", props);

  return (
    <FormControl>
      <Flex
        alignItems="flex-start"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <FormLabel htmlFor={field.name} marginBottom={2}>
          {label}
          {isRequired && (
            <Text as="span" variant="error">
              {" *"}
            </Text>
          )}
        </FormLabel>
        <FormFieldError error={meta.error} />
      </Flex>
      <Input
        isInvalid={meta.touched && meta.error ? true : false}
        isRequired={isRequired}
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default FormikInput;
