module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PWD || "root794613",
  database: "bia",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
};
