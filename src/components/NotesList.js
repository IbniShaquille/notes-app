import { Box, Text, Link } from '@chakra-ui/react';

const NoteList = ({ notes }) => {
    if (!notes.length) {
        return <Text>Tidak ada catatan</Text>;
    }
    return (
        <Box>
            {notes.map(note => (
                <Link href={`/notes/${note.id}`} key={note.id}>
                    <Box borderWidth="1px" borderRadius="lg" p="6" my="2">
                        <Text fontWeight="bold">{note.title}</Text>
                        <Text>{new Date(note.createdAt).toLocaleString()}</Text>
                        <Text>{note.body}</Text>
                    </Box>
                </Link>
            ))}
        </Box>
    );
};

export default NoteList;
