import React from 'react';
import { Box,  CircularProgress, Container,} from '@mui/material';



export const HomePage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);


  React.useEffect(() => {
    setLoading(true);
  }, [page]);

  return (
    <Container sx={{ mt: 6 }} maxWidth="xl">
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
        </>
      )}
    </Container>
  );
};
