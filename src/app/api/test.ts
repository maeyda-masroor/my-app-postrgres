// pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await query('SELECT * from user');
    res.status(200).json({ currentTime: result.rows[0].current_time });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
