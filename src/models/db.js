import { Client } from 'pg';

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

client.connect()
    .then(() => client.query(createTableQuery))
    .then(() => console.log('Table created successfully'))
    .catch(error => console.error('Error creating table:', error.message));


export default client;
