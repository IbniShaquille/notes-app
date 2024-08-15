import pool from '../../../models/db';

export default async (req, res) => {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const { rows } = await pool.query('SELECT id, title, body, createdat AS "createdAt" FROM notes WHERE id = $1', [id]);
            if (rows.length === 0) {
                res.status(404).json({ message: 'Note not found' });
            } else {
                res.status(200).json(rows[0]);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === 'PUT') {
        const { title, body } = req.body;
        try {
            const { rows } = await pool.query(
                'UPDATE notes SET title = $1, body = $2 WHERE id = $3 RETURNING *',
                [title, body, id]
            );
            if (rows.length === 0) {
                res.status(404).json({ message: 'Note not found' });
            } else {
                res.status(200).json(rows[0]);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { rowCount } = await pool.query('DELETE FROM notes WHERE id = $1', [id]);
            if (rowCount === 0) {
                res.status(404).json({ message: 'Note not found' });
            } else {
                res.status(204).end();
            }
        } catch (error) {
            console.error('Error deleting note:', error.message);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
