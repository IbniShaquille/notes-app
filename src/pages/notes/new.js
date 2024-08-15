// src/pages/notes/new.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Input, Textarea, Button } from '@chakra-ui/react';

const NewNote = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const createNote = async () => {
        if (!title || !body) {
            setError('Judul dan isi catatan harus diisi');
            return;
        }
        setError('');
        await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
        });
        router.push('/');
    };

    return (
        <Box p={5}>
            {error && <Box color="red.500">{error}</Box>}
            <Input
                placeholder="Judul"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                mb={4}
            />
            <Textarea
                placeholder="Isi Catatan"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                mb={4}
            />
            <Button colorScheme="teal" onClick={createNote}>Tambah Catatan</Button>
        </Box>
    );
};

export default NewNote;
