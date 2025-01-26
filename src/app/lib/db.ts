import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Neon connection string
  ssl: {
    rejectUnauthorized: false, // Neon requires SSL
  },
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
