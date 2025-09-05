import Boom from "@hapi/boom";

export const errorHandler = (err, req, res, next) => {
  if (Boom.isBoom(err)) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }

  const boomError = Boom.internal(err.message || "Error interno del servidor");
  const { output } = boomError;
  res.status(output.statusCode).json(output.payload);
};
