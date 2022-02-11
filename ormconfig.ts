module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nest-sql',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  // subscribers: ['dist/**/*.subscriber{ .ts,.js}'],
  // synchronize: false, -> for production when we want to migrate manually
  synchronize: true,
  migrations: ['dist/src/database/migrations/*.js'],
  // factories: ['dist/database/factories/*.factory{.ts,.js}'],
  // seeds: ['dist/database/seeders/*.seed{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  logging: false,
};
