import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { SideMenu } from './shared/components';

export const App = () => {
  return (
    <BrowserRouter>
      <SideMenu>
        <AppRoutes />
      </SideMenu>
    </BrowserRouter>
  );
};
