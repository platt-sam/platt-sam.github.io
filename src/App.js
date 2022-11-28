// import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Icon, IconButton, Link, Toolbar} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const github = "https://github.com/platt-sam/";
const linkedin = "https://www.linkedin.com/in/platt-sam/";

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Button href="#" variant="text">SP</Button>

          <Link href={linkedin}>
            <IconButton>
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
          </Link>

          <Link href={github}>
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
