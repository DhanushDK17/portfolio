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
            <Grid xs={12} lg={6} container justifyContent={"center"} alignItems={"center"}><Hero/></Grid>
            <Grid xs={12} lg={6} sx={{fontSize: {xs: "20px"}}}>
                <Typography>
                    Hey! I`m Dhanush
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