import { Button, Icon } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { useState } from 'react';
import { ModalCustoAdd } from '../custos/add-custo/ModalCustoAdd';

export const ActionMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    console.log(open);
  }
  return (
    <>    
      <Box
        display='flex'
        height={theme.spacing(8)}
      >
        <Box
          width='80%'
        ></Box>
        <Box
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          width='20%'
          sx={{ fontSize: 22 }}
        >
          <Button onClick={handleOpen}><Icon>shopping_cart_outlined</Icon></Button>
          <Icon>attach_money_outlined</Icon>
          <Icon>add_circle_outline</Icon>
        </Box>
      </Box>
      {
        open && (<ModalCustoAdd isOpen={open} />)
      }
    </>
  );
};