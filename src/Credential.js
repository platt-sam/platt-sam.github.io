import React from 'react';
import './App.css';
import { Typography } from '@mui/material';


function Credential(props) {
    let formattedHonors = "";
    if (props.credential.honors != null) {
        formattedHonors = " • " + props.credential.honors;
    }

    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12pt",
                    justifyContent: "center",
                    margin: "0 auto",
                    width: "70%",
                }}
            >
                {props.credential.title}<br />
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10pt",
                    justifyContent: "center",
                    margin: "0 auto",
                    width: "70%",
                }}
            >
                {props.credential.institution}<br />
                {props.credential.completion}{formattedHonors}<br /><br />
            </Typography>
        </>
    );
}

export default Credential;