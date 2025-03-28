const validator = require("validator");

const validateSignUpData = (req) => {
  const { name, email, password } = req.body;
  if (!name) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(email)) {
    throw new Error("Email is not valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong Password!");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "name",
    "email",
    "photoUrl",
    "bio"
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};