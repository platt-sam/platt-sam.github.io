import React from 'react';
import Project from './Project';

import { Grid, Typography } from '@mui/material';

import csclubposter from './media/soucsclubposter.jpg'
import lighthousesmagazine from './media/lighthouses_magazine.pdf'
import lighthousesmagazinecover from './media/lighthouses_magazine_cover.jpg'
import makeitmoveanimation from './media/makeitmoveanimation.mp4'
import mothman from './media/mothman.png'
import soucybersecposter from './media/soucybersecposter.png'
import surveillance from './media/surveillance.png'

function ProjectsContainer() {

    const projects = [
        {
            name : "Conversational Transcript 2.0",
            skills : ["aws", "project management", "python", "react.js"],
            description : "Web application created for the Southern Oregon University IT department. Dynamically generates transcripts of conversations with multiple audio input sources. Transcripts specify the speaker and includes timestamps for each piece of conversation. Developed with Liam Erickson and Joshua Yoon.",
            media : null,
            link : null,
        },
        {
            name : "Laughing Stock",
            skills : ["game design", "html", "java", "project management"],
            description : "Choose your own adventure game where the player attempts to board a plane and ends up landing on an island filled with clowns. First place winner of the HackOR 2021 Hackathon. Developed with Liam Erickson, Ronin Ganoot, and Peter Jacobson.",
            media : null,
            link : null,
        },
        {
            name : "Medford Charities and Social Services",
            skills : ["css", "docker", "gcp", "google maps api", "html", "python"],
            description : "Google Cloud Platform app displaying information about charities and social services in the Medford, Oregon area. Allows user submitted entries. Uses the Google Maps API to show site locations.",
            media : null,
            link : "https://medford-charities-ve76webfba-uw.a.run.app",
        },
        {
            name : "",
            skills : [],
            description : "",
            media : {
                type : "",
                url : "",
                alt : "",
            },
            link : "",
        },
    ];

    return (
        <>
            <Typography
                sx = {{
                    fontFamily: "Open Sans",
                    fontSize: "22pt",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    marginTop: "25px"
                }}
            >
                My Work
            </Typography>

            <Grid
                container
                columns = {6}
                spacing = {"25px"}
            >
                {
                    projects.map(
                        p => <Project project = { p } />
                    )
                }
            </Grid>
        </>
    );
}

export default ProjectsContainer;