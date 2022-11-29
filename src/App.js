// import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, Card, CardActions, CardContent, Grid, Grid2, Icon, IconButton, Link, Paper, Toolbar, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { fontStyle } from '@mui/system';

const github = "https://github.com/platt-sam/";
const linkedin = "https://www.linkedin.com/in/platt-sam/";

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Link href="#"> {/* Link to Return to Home Link */}
            <IconButton variant="text">SP</IconButton>
          </Link>

          <Link href={linkedin}>
            <IconButton><LinkedInIcon></LinkedInIcon></IconButton>
          </Link>

          <Link href={github}>
            <IconButton><GitHubIcon></GitHubIcon></IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{marginTop: 2, display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={5}> 
          <Card className="project">
            <CardContent>
              <Typography sx={{ fontSize: 18 }} >
                Lorem ipsum
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className="project">
            <CardContent>
              <Typography sx={{ fontSize: 18 }} >
                Dolor sit amet
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className="project">
            <CardContent>
              <Typography sx={{ fontSize: 18 }} >
                Consectetuer adipiscing elit
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className="project">
            <CardContent>
              <Typography sx={{ fontSize: 18 }} >
                Hello world
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
