const contactValidator = (data) => {
  const { name, email, phone, service, message } = data || {};

  // Check required fields
  const requiredFields = {
    name,
    email,
    phone,
    service,
    message,
  };

  for (const [field, value] of Object.entries(requiredFields)) {
    if (typeof value !== "string" || !value.trim()) {
      return `Please provide a valid ${field}.`;
    }
  }

  // Check maximum lengths
  if (
    name.length > 100 ||
    email.length > 254 ||
    phone.length > 15 ||
    service.length > 50 ||
    message.length > 3000
  ) {
    return "One or more fields are too long.";
  }

  return null;
};

export default contactValidator;