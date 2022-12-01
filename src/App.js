import './App.css';
import { AppBar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, Toolbar, Typography} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const github = "https://github.com/platt-sam/";
const linkedin = "https://www.linkedin.com/in/platt-sam/";

function App() {
  return (
    <div className="App">
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

          <Link href="mailto:platts1@sou.edu">
            <IconButton><EmailIcon></EmailIcon></IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="main">

        <Grid container columns={6} spacing={"25px"} >

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project" >
                <CardContent className="projectname">
                  Conversational Transcript 2.0
                </CardContent>

                <CardContent className="projectskills">
                  aws, project management, python, reactjs
                </CardContent>

                <CardContent className="projectpreview">
                  Web application created for the Southern Oregon University IT department. Dynamically generates transcripts of conversations with multiple audio input sources. Transcripts specify the speaker and includes timestamps for each piece of conversation. Developed with Liam Erickson and Joshua Yoon.
                </CardContent>

                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project">
                <CardContent className="projectname">
                  Laughing Stock
                </CardContent>

                <CardContent className="projectskills">
                  game design, html, java, project management
                </CardContent>

                <CardContent className="projectpreview">
                  Choose your own adventure game where the player attempts to board a plane and ends up landing on an island filled with clowns. First place winner of the HackOR 2021 Hackathon. Developed with Liam Erickson, Ronin Ganoot, and Peter Jacobson.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project" >
                <CardContent className="projectname">
                  Medford Charities and Social Services
                </CardContent>

                <CardContent className="projectskills">
                  css, docker, html, gcp, google maps api, python
                </CardContent>

                <CardContent className="projectpreview">
                  Google Cloud Platform app displaying information about charities and social services in the Medford, Oregon area. Allows user submitted entries. Uses the Google Maps API to show site locations.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>  
            <Card className="project" >
                <CardContent className="projectname">
                  Ballad of the Woods
                </CardContent>
                
                <CardContent className="projectskills">
                  css, html, javascript, game design
                </CardContent>

                <CardContent className="projectpreview">
                  A browser based videogame loosely inspired by the musical <i>Hadestown</i>. Developed with Gianna McCardell and Dean Wilson.
                </CardContent>

                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}> 
            <Card className="project" >
                <CardContent className="projectname">
                  Recipe Substitutor
                </CardContent>

                <CardContent className="projectskills">
                  data scrubbing, python
                </CardContent>

                <CardContent className="projectpreview">
                  Program that generates comments suggesting that a random ingredient from a given ingredient list is substituted with one randomly chosen from a list of thousands of ingredients.
                </CardContent>

                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project" >
                <CardContent className="projectname">
                  Docker Access Management
                </CardContent>

                <CardContent className="projectskills">
                  docker, go, reactjs
                </CardContent>

                <CardContent className="projectpreview">
                  Unpublished Docker extension created for an internal hackathon. Allows management of Docker organizations, groups, and images from Docker Desktop. Developed with Victor Bersy, Jonathan Dieu, Sylvialynn Favello, and Ryan Hristovski.
                </CardContent>

                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project">
                <CardContent className="projectname">
                  Computer Science Club Poster
                </CardContent>

                <CardContent className="projectskills">
                  adobe illustrator, graphic design, marketing, typography
                </CardContent>

                <CardMedia
                  component="img"
                  image="https://drive.google.com/uc?id=1UoewJIciUST3yoQMVQTvgrjl-Ip_Zbzm"
                  alt="southern oregon university computer science club poster"
                  sx={{objectFit: "contain"}}
                />

                <CardActions className="actions" >
                  <Link href="https://drive.google.com/file/d/1UoewJIciUST3yoQMVQTvgrjl-Ip_Zbzm/view">+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
