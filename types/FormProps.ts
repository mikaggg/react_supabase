import { Control } from "react-hook-form";
import { FormValues } from "../src/component/pages/Login";

type InputFiledType = "text" | "password" | "email";

export type InputTextProps = {
  name: string;
  id?: string;
  label: string;
  control: Control<FormValues>;
  setValue?: FormValues;
  required?: boolean;
  type?: InputFiledType;
  autoComplete?: string;
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string | undefined;
  rules: {
    required?: string;
    pattern?: { value: RegExp; message: string };
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
  };
};

export type SingUpForm = {
  email?: string;
  password?: string;
}
