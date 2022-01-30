import 'reflect-metadata';

import { config } from 'dotenv';
config({ path: './config.env' });

export default {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['./src/api/**/*-entity{.ts,.js}'],
  migrations: ['./src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
