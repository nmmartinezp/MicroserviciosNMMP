const config = {
  app: {
    port: process.env.PORT || 4000,
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    dbname: process.env.DB_NAME || "test",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 27017,
  },
};

export default config;
