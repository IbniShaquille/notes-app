import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Input, Textarea, Button } from '@chakra-ui/react';

const EditNote = () => {
    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`/api/notes/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setBody(data.body);
                });
        }
    }, [id]);

    const updateNote = async () => {
        if (!title || !body) {
            setError('Judul dan isi catatan harus diisi');
            return;
        }
        setError('');
        await fetch(`/api/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
        });
        router.push(`/notes/${id}`);
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
            <Button colorScheme="teal" onClick={updateNote}>Ubah Catatan</Button>
            <Button colorScheme="blue" onClick={() => router.push(`/notes/${id}`)}>Batal</Button>
        </Box>
    );
};

export default EditNote;
