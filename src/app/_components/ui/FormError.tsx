import { ErrorTypeArr } from "../../_actions";

const fieldErrMessage = (
  errors: ErrorTypeArr[] | string | undefined,
  field: string
): string | undefined => {
  if (!errors) return; // Handles undefined or null case
  if (typeof errors === "string") return errors; // If errors is a string, return it directly
  const error = errors.find((err) => err.field === field); // TypeScript will infer the type
  if (error) {
    return error.message; // Return the error message if found
  }
};

const FormErrorMessages = ({
  message,
  field,
}: {
  message: ErrorTypeArr[] | string | undefined;
  field: string;
}) => {
  return (
    <p className="text-orange-normal text-sm mb-0">
      {fieldErrMessage(message as ErrorTypeArr[] | string, field)}
    </p>
  );
};

export default FormErrorMessages;
