import React from 'react';
import './App.css';
import { AppBar, IconButton, Link, Toolbar} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// links to socials
const github = "https://github.com/platt-sam";
const linkedin = "https://www.linkedin.com/in/platt-sam";

function NavBar() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: 3 }}>
        <Toolbar>
          <Link href="#">
            <IconButton variant="text">SP</IconButton>
          </Link>

          <Link href={linkedin}>
            <IconButton><LinkedInIcon></LinkedInIcon></IconButton>
          </Link>

          <Link href={github}>
            <IconButton><GitHubIcon></GitHubIcon></IconButton>
          </Link>

          <Link href="mailto:sam@theplatts.com">
            <IconButton><EmailIcon></EmailIcon></IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;