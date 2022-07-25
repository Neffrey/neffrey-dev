// FRAMEWORK
import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  HStack,
  Text,
  Textarea,
} from "@chakra-ui/react";

// FORM VALUES
interface TextAreaPropTypes {
  label: string;
  name: string;
  type?: string;
  multiple?: boolean;
  value?: string;
  [x: string]: any;
  validate?: (value: any) => undefined | string | Promise<any>;
}

// COMPONENT FUNCTION
const FormikTextArea = ({ label, ...props }: TextAreaPropTypes) => {
  const [field, meta] = useField(props);

  return (
    <FormControl>
      <HStack justifyContent="space-between" alignItems="flex-start">
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        {meta.error && <Text>{meta.error}</Text>}
      </HStack>
      <Textarea
        isInvalid={meta.touched && meta.error ? true : false}
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default FormikTextArea;
