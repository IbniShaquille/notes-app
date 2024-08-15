// components/NoteDetail.js
import { Box, Text, Button } from '@chakra-ui/react';

const NoteDetail = ({ note, onDelete }) => {
    if (!note) return null;
    return (
        <Box borderWidth="1px" borderRadius="lg" p="6" my="2">
            <Text fontWeight="bold">{note.title}</Text>
            <Text>{new Date(note.createdAt).toLocaleString()}</Text>
            <Text>{note.body}</Text>
            <Button onClick={() => onDelete(note.id)} colorScheme="red" mt="4">
                Delete
            </Button>
        </Box>
    );
};

export default NoteDetail;
