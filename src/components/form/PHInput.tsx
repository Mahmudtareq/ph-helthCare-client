import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
  placeholder?: string;
};
const PHInput = ({
  name,
  label,
  type = "text",
  fullWidth,
  size = "small",
  required,
  sx,
  placeholder,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          required={required}
          placeholder={label}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;
