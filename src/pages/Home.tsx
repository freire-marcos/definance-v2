import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { AppCard } from '../shared/components/dashboard/AppCard';

export const Home = () => {
  return (
    <Box width='100%' height='100%' display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'>
      <Box 
        display='flex'
        justifyContent='space-around'
        alignItems='center'
        width='100%'
      >
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </Box>
      <h2>How many times do i need to play this?</h2>
      <Button>Keep playing</Button>

    </Box>

  );
};