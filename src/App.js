import './App.css';
import { AppBar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, Toolbar, Typography} from '@mui/material';
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
        </Toolbar>
      </AppBar>

      <div className="main">

        <Grid container columns={3} spacing={"25px"} sx={{ marginTop: "12.5px" }} >

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Conversational Transcript" subheader="aws, python, reactjs" />
                <CardContent>
                  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="#" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={1}> 
          <Card className="project" >
                <CardHeader title="Laughing Stock" subheader="html, java" />
                <CardContent>
                  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="#" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Medford Charities and Social Services" subheader="gcp, googlemapsapi, python" />
                <CardContent>
                  Google Cloud Platform (GCP) app displaying information about charities and social services in the Medford, Oregon area. Allows user submitted entries. Written in Python using Flask. Uses the Google Maps API to show site locations.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="#" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Ballad of the Woods" subheader="html, javasript" />
                <CardContent>
                  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="#" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Recipe Substituor" subheader="python" />
                <CardContent>
                  Program that generates comments suggesting that a random ingredient from a given ingredient list is substituted with one randomly chosen from a list of thousands of ingredients.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="#" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={1}> 
            <Card className="project" >
                <CardHeader title="Southern Oregon University Computer Science Club Poster" subheader="adobeillustrator, graphicdesign, marketing, typography" />
                <CardContent>
                  Lorem ipsum dolor sit amet.
                </CardContent>
                <CardContent sx={{ fontSize: "10pt" }} >
                  <Link href="https://drive.google.com/file/d/1UoewJIciUST3yoQMVQTvgrjl-Ip_Zbzm/view?usp=share_link" >+ see more</Link>
                </CardContent>
            </Card>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
