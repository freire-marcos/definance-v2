import { 
  Avatar, 
  Box, 
  Divider, 
  Drawer, 
  Icon, 
  Link, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';

export const SideMenu: React.FC = ({ children }) => {
  const menuList = [
    {text: 'Home', icon: 'home', id: 1, route: '/'}, 
    {text: 'Contas', icon: 'account_balance', id: 2, route: '/teste'}, 
    {text: 'Despesas', icon: 'attach_money_outlined', id: 3, route: '/nova'}, 
    {text: 'Configurações', icon: 'settings_outlined', id: 4, route: '/'}, 
  ];
  return (
    <Box display='flex' width='100vw' height='100vh'>
      <Drawer variant='permanent'>
        <Box 
          width='240px' 
          height='20%' 
          display='flex' 
          flexDirection='column' 
          alignItems='center' 
          justifyContent='center'
        >
          <Avatar 
            sx={{ width: 70, height: 70}}
            alt="Remy Sharp" 
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1802&q=80" 
          />
        </Box>  
        <Divider /> 
        <Box 
          flex={1}
        >
          <List component='nav'>
            {
              menuList.map((menu) => {
                return (
                  <Link key={menu.id} style={{ textDecoration: 'none' }} href={menu.route}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon>{menu.icon}</Icon>
                      </ListItemIcon>
                      <ListItemText primary={menu.text} />
                    </ListItemButton>
                  </Link>
                );
              })
            };
          </List>
        </Box>       
      </Drawer>
      <Box display='flex' height='100%' width='80%' marginLeft='250px'>
        {children}
      </Box>

    </Box>
    
  );
};