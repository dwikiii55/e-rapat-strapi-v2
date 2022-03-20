module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "e_rapat"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", ""),
      ssl: env.bool("DATABASE_SSL", false),
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      // },
    },
    debug: false,
  },
});
