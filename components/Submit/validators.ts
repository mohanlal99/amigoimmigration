interface ValidationResult {
  valid: boolean;
  message: string;
}

export const validateRequiredFields = (
  fields: Record<string, any>,
): ValidationResult => {
  for (let key in fields) {
    if (!fields[key]) {
      return { valid: false, message: `${key} is required` };
    }
  }

  return { valid: true, message: "" };
};

export const validateUrl = (url: string): ValidationResult => {
  const urlRegex =
    /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.?%&=]*)?$/;

  if (!urlRegex.test(url)) {
    return {
      valid: false,
      message: "Invalid URL. Please provide a valid CV link.",
    };
  }

  return { valid: true, message: "" };
};
