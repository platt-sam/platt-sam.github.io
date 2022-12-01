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

        <Grid container columns={3} spacing={"25px"} sx={{ marginTop: "12.5px" }} >

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Conversational Transcript" subheader="aws, awstranscribe, python, reactjs" />
                <CardContent>
                Conversational Transcription is a web application created for the Southern Oregon University IT department. Dynamically generates transcripts of conversations with multiple audio input sources. Transcripts specify the speaker and includes timestamps for each piece of conversation.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={1}> 
          <Card className="project">
                <CardHeader title="Laughing Stock" subheader="gamedesign, html, java" />
                <CardContent>
                  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Medford Charities and Social Services" subheader="gcp, googlemapsapi, python" />
                <CardContent>
                  Google Cloud Platform (GCP) app displaying information about charities and social services in the Medford, Oregon area. Allows user submitted entries. Written in Python using Flask. Uses the Google Maps API to show site locations.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Ballad of the Woods" subheader="html, javasript, gamedesign" />
                <CardContent>
                  A browser based videogame loosely inspired by the musical “Hadestown”. Browser based game written in JavaScript with some HTML and CSS
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Recipe Substituor" subheader="python" />
                <CardContent>
                  Program that generates comments suggesting that a random ingredient from a given ingredient list is substituted with one randomly chosen from a list of thousands of ingredients.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Computer Science Club Poster" subheader="adobeillustrator, graphicdesign, marketing, typography" />
                <CardContent>
                Poster created to advertise Southern Oregon University's Computer Science club, highlighting several key events to take place during the 2022-23 school year.
                </CardContent>
                <CardActions className="actions" >
                  <Link href="https://drive.google.com/file/d/1UoewJIciUST3yoQMVQTvgrjl-Ip_Zbzm/view?usp=share_link" >+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
