import React from 'react';
import Credential from './Credential';
import { Typography } from '@mui/material';

function CredentialsContainer() {

    const credentials = [
        {
          title : "Bachelor of Science in Computer Science",
          institution : "Southern Oregon University",
          completion : "graduated June, 2023",
          honors : "cum laude",
        },
        {
          title : "Certificate in Cybersecurity",
          institution : "Southern Oregon University",
          completion : "graduated June, 2023",
          honors : null,
        },
        {
          title : "Micro-credential Badge in Network Technology",
          institution : "Southern Oregon University",
          completion : "issued August 2021",
          honors : null,
        },
    ];

    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "22pt",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    marginTop: "25px"
                }}
            >
                Credentials
            </Typography>

            {
                credentials.map(
                    c => <Credential credential = { c } />
                )
            }

            <Typography
                sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10pt",
                    fontStyle: "italic",
                    justifyContent: "center",
                    margin: "0 auto",
                    width: "70%",
                }}
            >
                Additional information regarding my credentials and educational background is available on my LinkedIn profile
            </Typography>
        </>
    );
}

export default CredentialsContainer;