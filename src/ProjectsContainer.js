import React from 'react';
import Project from './Project';

import { Grid, Typography } from '@mui/material';

import csclubposter from './media/soucsclubposter.jpg'
import lighthousesmagazine from './media/lighthouses_magazine.pdf'
import lighthousesmagazinecover from './media/lighthouses_magazine_cover.jpg'
import makeitmoveanimation from './media/makeitmoveanimation.mp4'
import mortality from './media/mortality.png'
import soucybersecposter from './media/soucybersecposter.png'
import surveillance from './media/surveillance.png'
import { light } from '@mui/material/styles/createPalette';

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
            name : "Racing Info CLI",
            skills : ["object oriented programming", "python", "unit testing"],
            description : "A CLI program to track information about various motor racing series, such as the teams, drivers, engine manufacturers, and championship standings. Current implementation includes the Formula One 2023 Championship.",
            media : null,
            link : "https://github.com/SOUComputerScience/final_project-platt-sam",
        },
        {
            name : "Medford Charities and Social Services",
            skills : ["css", "docker", "gcp", "google maps api", "html", "python"],
            description : "Google Cloud Platform app displaying information about charities and social services in the Medford, Oregon area. Allows user submitted entries. Uses the Google Maps API to show site locations.",
            media : null,
            link : "https://medford-charities-ve76webfba-uw.a.run.app",
        },
        {
            name : "Ballad of the Woods",
            skills : ["css", "game design", "html", "javascript"],
            description : "A browser based videogame loosely inspired by the musical \"Hadestown\". Developed with Gianna McCardell and Dean Wilson.",
            media : null,
            link : "https://webpages.sou.edu/~platts1/emda203",
        },
        {
            name : "Recipe Substitutor",
            skills : ["data scrubbing", "python"],
            description : "Program that generates comments suggesting that a random ingredient from a given ingredient list is substituted with one randomly chosen from a list of thousands of ingredients.",
            media : null,
            link : null,
        },
        {
            name : "Docker Access Management",
            skills : ["docker", "go", "react.js"],
            description : "Unpublished Docker extension created for an internal hackathon. Allows management of Docker organizations, groups, and images from Docker Desktop. Developed with Victor Bersy, Jonathan Dieu, Sylvialynn Favello, and Ryan Hristovski.",
            media : null,
            link : null,
        },
        {
            name : "Mortality (Anxieties)",
            skills : ["adobe illustrator", "graphic design", "typography"],
            description : "Part of the \"Anxieties\" series which showcases western anxieties in the style of Constructivism. This piece depicts the anxieties of mortality and impending death.",
            media : {
                type : "img",
                url : mortality,
                alt : "typographic poster about mothman and mortality",
                class : null,
            },
            link : mortality,
        },
        {
            name : "Surveillance (Anxieties)",
            skills : ["adobe after effects", "adobe illustrator", "animation", "graphic design", "typography"],
            description : "Part of the \"Anxieties\" series which showcases western anxieties in the style of Constructivism. This still image is from an animation depicting the anxieties of surveillance.",
            media : {
                type : "img",
                url : surveillance,
                alt : "typographic poster about surveillance",
                class : null,
            },
            link : makeitmoveanimation,
        },
        {
            name : "Computer Science Club Poster",
            skills : ["adobe illustrator", "graphic design", "marketing", "typography"],
            description : null,
            media : {
                type : "img",
                url : csclubposter,
                alt : "southern oregon university computer science club poster",
                class : "csposter",
            },
            link : csclubposter,
        },
        {
            name : "Southern Oregon University Cybersecurity Program Poster",
            skills : ["adobe illustrator", "graphic design", "marketing", "typography"],
            description : null,
            media : {
                type : "img",
                url : soucybersecposter,
                alt : "southern oregon university cybersecurity program poster",
                class : "cybersecposter",
            },
            link : soucybersecposter,
        },
        {
            name : "Lighthouses Magazine",
            skills : ["adobe indesign", "graphic design", "marketing", "typography"],
            description : "\"Lighthouses\" Magazine's December 2022 issue, which focuses on Oregon lighthouses.",
            media : {
                type : "img",
                url : lighthousesmagazinecover,
                alt : "lighthouses magazine cover page",
                class : "lighthousesmagazine",
            },
            link : lighthousesmagazine,
        },
        /*
        {
            name : "",
            skills : [],
            description : "",
            media : {
                type : "",
                url : "",
                alt : "",
                class : "",
            },
            link : "",
        },
        */
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