module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfl8odhgp3jiui92mepg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ceos'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '6eyQ5KBMU0N1LQltXBeX0ijwCPQwBvGt'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
