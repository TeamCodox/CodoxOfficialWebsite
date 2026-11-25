const errorHandler = (err, req, res, next) => {
  console.error("Server Error:", err);

  const statusCode = err.status || err.statusCode || 500;

  let message = "Something went wrong.";
  if (statusCode === 413) {
    message = "Request body is too large.";
  } else if (statusCode === 400) {
    message = "Invalid request data.";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;