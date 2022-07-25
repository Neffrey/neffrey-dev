// FRAMEWORK
import React from "react";
import { useField } from "formik";
import { FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";

// FORM VALUES
interface InputPropTypes {
  label: string;
  name: string;
  type?: string;
  multiple?: boolean;
  value?: string;
  [x: string]: any;
  validate?: (value: any) => undefined | string | Promise<any>;
}

// COMPONENT FUNCTION
const FormikInput = ({ label, ...props }: InputPropTypes) => {
  const [field, meta] = useField(props);

  return (
    <FormControl>
      <HStack justifyContent="space-between" alignItems="flex-start">
        <FormLabel htmlFor={field.name} marginBottom={1}>
          {label}
        </FormLabel>
        {meta.error && <Text marginBottom={1}>{meta.error}</Text>}
      </HStack>
      <Input
        isInvalid={meta.touched && meta.error ? true : false}
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default FormikInput;
