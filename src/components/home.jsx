// Component imports
import { Hero } from "./hero"
import { Experience } from "./Experience";

// MUI imports
import { Grid, Typography, Stack, Link } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export const Home = () => {
    return <>
        <Grid container alignItems="center" height="100vh">
            <Grid item xs={12} xl={6} container justifyContent={"center"} alignItems={"center"}><Hero/></Grid>
            <Grid item xs={12} xl={6} sx={{fontSize: {xs: "20px"}}}>
                <Typography>
                    Hey! I`m Dhanush. I'm a Sr.Software Engineer with experience and skills in Web Application Development, Mobile Application Development, Data Science over a course of 5+ years
                </Typography>
                <Typography>
                    I`m also available in the following platforms. 
                </Typography>
                <Stack direction="row" justifyContent="center">
                    <Link href="https://www.linkedin.com/in/dhanushkumarselvaraj/"><LinkedInIcon/></Link>
                    <Link href="https://www.linkedin.com/in/dhanushkumarselvaraj/"><MailIcon/></Link>
                </Stack>
            </Grid>
        </Grid>
        <Experience/>
    </>
}