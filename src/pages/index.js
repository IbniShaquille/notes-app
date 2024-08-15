import { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => {
        setNotes(data);
      })
      .catch(err => console.error('Error fetching notes:', err));
  }, []);

  return (
    <Box p={5}>
      <VStack spacing={4}>
        {notes.length === 0 ? (
          <Text>Tidak ada catatan</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {notes.map(note => (
              <Link href={`/notes/${note.id}`} key={note.id} legacyBehavior>
                <a>
                  <Box borderWidth={1} p={4} borderRadius="md">
                    <Text fontSize="xl" fontWeight="bold">{note.title}</Text>
                    <Text>{new Date(note.createdAt).toLocaleString()}</Text>
                    <Text>{note.body}</Text>
                  </Box>
                </a>
              </Link>
            ))}
          </SimpleGrid>
        )}
        <Link href="/notes/new" legacyBehavior>
          <a>
            <Button colorScheme="teal">Tambah Catatan</Button>
          </a>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
