import React from 'react';
import './App.css';
import { Card, CardActions, CardContent, CardMedia, Grid, Link } from '@mui/material';

function Project(props) {

    let formattedLink, formattedMedia = null;

    if (props.project.link != null) {
        formattedLink = (
            <CardActions className="CardActions" >
                <Link href={props.project.link}>+ see more</Link>
            </CardActions>
        );
    }

    if (props.project.media != null) {
        formattedMedia = (
            <CardMedia
                component = {props.project.media.type}
                image = {props.project.media.url}
                alt = {props.project.media.alt}
                sx = {{objectFit: "contain"}}
            />
        );
    }

    return (
        <Grid item xs={6} sm={3} md={2} className="projectgrid">
            <Card className="project">
                <CardContent className="projectname">
                    {props.project.name}
                </CardContent>

                <CardContent className="projectskills">
                    {(props.project.skills).join(", ")}
                </CardContent>

                {formattedMedia}

                <CardContent className="projectpreview" sx={{ marginTop: "0px" }}>
                    {props.project.description}
                </CardContent>

                {formattedLink}
            </Card>
        </Grid>
    );
}

export default Project;