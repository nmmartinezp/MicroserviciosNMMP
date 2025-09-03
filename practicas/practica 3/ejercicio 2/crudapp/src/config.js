const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "nothing",
    dbname: process.env.DB_NAME || "test",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  },
};

export default config;
