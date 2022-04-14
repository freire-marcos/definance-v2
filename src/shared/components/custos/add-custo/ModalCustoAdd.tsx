import { Button, Fade, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const ModalCustoAdd = (props: any) => {
  const {isOpen} = props;

  const [categoria, setCategoria] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string);
  };

  const [dateValue, setDateValue] = useState<Date | null>(null);

  const testarData = () => {
    return console.log('ta indo');
  };
  
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '70%',
    bgcolor: '#fff',
    border: '1px solid #777',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setOpen(isOpen);
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={modalStyle}>

          <Typography id="modal-modal-title" variant="h6" component="h3">
            Adicionar custo
          </Typography>
          <Box
            component='form'
            display='flex'
            flexDirection='column'
          >
            <FormControl fullWidth>
              <Box>
                <TextField
                  id="descricao"
                  label="Descrição"
                  sx={{
                    width: '100%',
                    marginTop: '18px'
                  }}
                />
              </Box>
            </FormControl>

            <FormControl>
              <Box>
                <TextField
                  id="valor"
                  label="Valor"
                  sx={{
                    width: '100%',
                    marginTop: '18px'
                  }}
                />
              </Box>
            </FormControl>

            <FormControl>
              <Box sx={{ marginTop: '18px' }}>
                <InputLabel id="categoria">Categoria</InputLabel>
                <Select
                  id='categoria'
                  label="Categoria"
                  value={categoria}
                  sx={{
                    width: '100%'
                  }}
                >
                  <MenuItem value={10}>Fixo</MenuItem>
                  <MenuItem value={30}>Variável</MenuItem>
                  <MenuItem value={20}>Eventual</MenuItem>
                </Select>
              </Box>
            </FormControl>

            <FormControl>
              <Box sx={{ marginTop: '18px' }}>
                <InputLabel id="subcategoria">Sub categoria</InputLabel>
                <Select
                  id='subcategoria'
                  label="Sub Categoria"
                  value={categoria}
                  sx={{
                    width: '100%'
                  }}
                >
                  <MenuItem value={10}>Alimentação</MenuItem>
                  <MenuItem value={20}>Transporte</MenuItem>
                  <MenuItem value={30}>Lazer</MenuItem>
                  <MenuItem value={30}>Educação</MenuItem>
                  <MenuItem value={30}>Lazer</MenuItem>
                </Select>
              </Box>
            </FormControl>

            <FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ marginTop: '18px', width: '100%' }}>
                  <DatePicker
                    label="Data"
                    inputFormat="dd/MM/yyyy"
                    value={dateValue}
                    onChange={setDateValue}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              </LocalizationProvider>
            </FormControl>

            <Box sx={{
              marginTop: '80px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'end'
            }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button>Ok</Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal >
  );
};