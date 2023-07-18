import React from 'react';

import { Typography } from '@mui/material';

function Intro() {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "22pt",
                    fontWeight: "bold"
                }}
            >
                About Me
            </Typography>

            <Typography
                className = "subheading"
                sx = {{
                    fontFamily: "Open Sans",
                    fontSize: "14pt",
                    fontStyle: "italic",
                    marginBottom: "25px",
                }}
            >
                well-designed code
            </Typography>

            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12pt",
                    justifyContent: "center",
                    margin: "0 auto",
                    width: "70%",
                }}
            >
                Hello, my name is Sam Platt. I'm an Oregon based software engineer and recent college graduate.<br /><br />
                I've leaned into design from the start. My first experience with code was through web development in high school, but I was already sketching out designs years before I created my first HTML file.<br /><br />
                After a software engineering internship at Docker that showed me the importance of UX and UI design in the software development lifecycle, I realized it was time to return to creativity. I spent my fourth and final year of college exploring all things design, completing a minor in <i>Emerging Media and Digital Arts</i>.<br /><br />
                My goal as a software engineer has always been to surpass the standard of making a product that works; I strive to create software that is an intuitive and pleasant experience for all users.
            </Typography>
        </>
    );
}

export default Intro;