import './App.css';
import { AppBar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, Toolbar, Typography} from '@mui/material';

import csclubposter from './media/soucsclubposter.jpg'
import makeitmoveanimation from './media/makeitmoveanimation.mp4'
import mothman from './media/mothman.png'
import surveillance from './media/surveillance.png'

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

        {/* ABOUT ME */}

        <Typography sx={{
          fontFamily: "Open Sans",
          fontSize: "22pt",
          fontWeight: "bold"
        }}>
          About Me
        </Typography>

        <Typography className="subheading" sx={{
          fontFamily: "Open Sans",
          fontSize: "14pt",
          fontStyle: "italic",
          marginBottom: "25px",
        }}>
          well-designed code
        </Typography>

        <Typography className="aboutme" sx={{
          fontFamily: "Open Sans",
          fontSize: "12pt",
          justifyContent: "center",
          margin: "0 auto",
          width: "70%",
        }}>
          I've leaned into design from the start. My first foray into code was web development in high school, but I was already sketching out new designs and layouts years before I created my first HTML file.<br/><br/>
          After a software engineering internship that showed me the importance of UX and UI design in the softare development lifecycle, I realized it was beyond time to return to creativity. I spent my fourth year of college exploring all things design.<br/><br/>
          My goal as a software engineer has always been to surpass the standard of making a product that works; I strive to create software that is intuitive and a pleasant experience for all users.
        </Typography>

        {/* MY WORK */}

        <Typography sx={{
          fontFamily: "Open Sans",
          fontSize: "22pt",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "25px"
        }}>
          My Work
        </Typography>

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

                {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
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
                
                {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
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
                  <Link href="https://medford-charities-ve76webfba-uw.a.run.app/" >+ see more</Link>
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
                  <Link href="https://webpages.sou.edu/~platts1/emda203" >+ see more</Link>
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

                {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
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

                {/*<CardActions className="actions" >
                  <Link href="#" >+ see more</Link>
                </CardActions>*/}
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project">
                <CardContent className="projectname">
                  Mortality (Anxieties)
                </CardContent>

                <CardContent className="projectskills">
                  adobe illustrator, graphic design, typography
                </CardContent>

                <CardMedia
                  component="img"
                  image={mothman}
                  alt="typographic poster about mothman and mortality"
                  sx={{objectFit: "contain"}}
                />

                <CardContent className="projectpreview" sx={{marginTop: "0px"}}>
                  Part of the <i>Anxieties</i> series which showcases western anxieties in the style of Constructivism. This piece depicts the anxieties of mortality and impending death.
                </CardContent>

                <CardActions className="actions" >
                  <Link href={mothman}>+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Card className="project">
                <CardContent className="projectname">
                  Surveillance (Anxieties)
                </CardContent>

                <CardContent className="projectskills">
                  adobe after effects, adobe illustrator, animation, graphic design, typography
                </CardContent>

                <CardMedia
                  component="img"
                  image={surveillance}
                  alt="typographic poster about surveillance"
                  sx={{objectFit: "contain"}}
                />

                <CardContent className="projectpreview" sx={{marginTop: "0px"}}>
                  Part of the <i>Anxieties</i> series which showcases western anxieties in the style of Constructivism. This still image is from an animation depicting the anxieties of surveillance.
                </CardContent>

                <CardActions className="actions" >
                  <Link href={makeitmoveanimation}>+ see more</Link>
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
                  image={csclubposter}
                  alt="southern oregon university computer science club poster"
                  sx={{objectFit: "contain"}}
                />

                <CardActions className="actions" >
                  <Link href={csclubposter}>+ see more</Link>
                </CardActions>
            </Card>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
