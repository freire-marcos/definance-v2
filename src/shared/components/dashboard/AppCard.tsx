import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { fontSize, width } from '@mui/system';

// interface IAppCard {
//   width: string;
//   fontSize: string;  
//   color: string;
//   variant: string;
// }
export const AppCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Vejamos isso
        </Typography>
        <Typography variant="h5" component="div">
          Caralho
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};