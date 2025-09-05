export const responseHandler = (req, res, next) => {
  res.sendData = (data, message = "OK") => {
    res.status(200).json({
      status: "success",
      message,
      data,
    });
  };
  next();
};
