import client from '../../../models/db';
import pool from '../../../models/db';

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { rows } = await pool.query('SELECT id, title, body, createdat AS "createdAt" FROM notes');
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === 'POST') {
        const { title, body } = req.body;
        try {
            const { rows } = await pool.query(
                'INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING *',
                [title, body]
            );
            res.status(201).json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
