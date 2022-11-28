// import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Icon, IconButton, Link, Paper, Stack, styled, Toolbar} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const pagelinks = ['linkedin.com', 'github.com'];

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Button href="#" variant="text">SP</Button>

          <Link href="https://www.linkedin.com/in/platt-sam/">
            <IconButton>
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
          </Link>

          <Link href="https://github.com/platt-sam/">
            <IconButton>
              <GitHubIcon></GitHubIcon>
            </IconButton>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
