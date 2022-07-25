// FRAMEWORK
import React from "react";
import { useField } from "formik";
import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";

// MY COMPONENTS
import FormFieldError from "components/molecules/formFieldError";

// FORM VALUES
interface TextAreaPropTypes {
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
const FormikTextArea = ({
  label,
  isRequired = false,
  ...props
}: TextAreaPropTypes) => {
  const [field, meta] = useField(props);

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
      <Textarea
        isInvalid={meta.touched && meta.error ? true : false}
        isRequired={isRequired}
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default FormikTextArea;
