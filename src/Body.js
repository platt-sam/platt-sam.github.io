import React from 'react';
import './App.css';
import CredentialsContainer from './CredentialsContainer';
import Intro from './Intro';
import ProjectsContainer from './ProjectsContainer';
import { Card, CardActions, CardContent, CardMedia, Grid, Link } from '@mui/material';

function Body() {
    return (
        <div className = "Body" >
            <Intro />

            <CredentialsContainer />

            <ProjectsContainer />
        </div>
    );
}

export default Body;