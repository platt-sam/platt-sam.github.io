import React from 'react';
import './App.css';
import CredentialsContainer from './CredentialsContainer';
import Intro from './Intro';
import ProjectsContainer from './ProjectsContainer';

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