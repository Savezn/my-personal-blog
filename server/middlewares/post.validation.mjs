export const validatePost = (req, res, next) => {
  // check if all required fields are present (return specific error message for each field)
  const fieldErrors = {};

  if (!req.body.title) {
    fieldErrors.title = "Title is required";
  }

  if (!req.body.image) {
    fieldErrors.image = "Image is required";
  }

  if (!req.body.category_id) {
    fieldErrors.category_id = "Category ID is required";
  }

  if (!req.body.description) {
    fieldErrors.description = "Description is required";
  }

  if (!req.body.content) {
    fieldErrors.content = "Content is required";
  }

  if (!req.body.status_id) {
    fieldErrors.status_id = "Status ID is required";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({
      message: "Please correct the following errors:",
      errors: fieldErrors,
    });
  }

  const typeErrors = {};

  if (typeof req.body.title !== "string") {
    typeErrors.title = "Title must be a string";
  }

  if (typeof req.body.image !== "string") {
    typeErrors.image = "Image must be a string";
  }

  if (typeof req.body.category_id !== "number") {
    typeErrors.category_id = "Category ID must be a number";
  }

  if (typeof req.body.description !== "string") {
    typeErrors.description = "Description must be a string";
  }

  if (typeof req.body.content !== "string") {
    typeErrors.content = "Content must be a string";
  }

  if (typeof req.body.status_id !== "number") {
    typeErrors.status_id = "Status ID must be a number";
  }

  if (Object.keys(typeErrors).length > 0) {
    return res.status(400).json({
      message: "Please correct the following data type errors:",
      errors: typeErrors,
    });
  }
  next();
};