require("dotenv").config();


module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        required: false,
        rejectUnauthorized: true,
      },
    },
    logging: ( process.env.NODE_ENV === "production" ) ? false : console.log,
    define: {
      timestamps: false
    }
  }
}
