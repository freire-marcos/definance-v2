import { Box, Drawer } from '@mui/material';

export const SideMenu: React.FC = ({ children }) => {
  return (
    <Drawer variant='permanent'>
      <Box width='200px' height='100vh' display='flex' flexDirection='column'>
        <h1>teste</h1>
      </Box>          
    </Drawer>
  );
};