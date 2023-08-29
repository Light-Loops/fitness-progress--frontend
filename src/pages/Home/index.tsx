import React from 'react';
import { Box, CircularProgress, Container } from '@mui/material';
/* import { UserInfoForm } from '../../components/Form'; */
import { ProposalPage } from '../../components/Proposal';


export const HomePage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, /* setPage */] = React.useState<number>(1);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [page]);

  return (
    <Container sx={{ 
      mt: 1, 
      }} maxWidth="md">
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', height:400 }}>
          <CircularProgress />
        </Box>
      ) : (
        //<UserInfoForm onSubmit={(values) => console.log(values)} />
        <ProposalPage />
      )}
    </Container>
  );
};
