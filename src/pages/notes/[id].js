import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Text, Button } from '@chakra-ui/react';

const NoteDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [note, setNote] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/notes/${id}`)
                .then(res => res.json())
                .then(data => setNote(data));
        }
    }, [id]);

    const deleteNote = async () => {
        await fetch(`/api/notes/${id}`, {
            method: 'DELETE',
        });
        router.push('/');
    };

    if (!note) return <Text>Loading...</Text>;

    return (
        <Box p={5}>
            <Text fontSize="xl" fontWeight="bold">{note.title}</Text>
            <Text>{new Date(note.createdAt).toLocaleString()}</Text>
            <Text>{note.body}</Text>
            <br />
            <Button colorScheme="red" onClick={deleteNote}>Hapus Catatan</Button>
            <Button colorScheme="teal" onClick={() => router.push(`/notes/${id}/edit`)}>Ubah Catatan</Button>
            <Button colorScheme="blue" onClick={() => router.push('/')}>Kembali</Button>
        </Box>
    );
};

export default NoteDetail;
