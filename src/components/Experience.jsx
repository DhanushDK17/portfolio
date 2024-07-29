// MUI imports
import { Grid, Typography, List, ListItemText, Stack } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';

// Data imports
import { experiences } from "../data/experience"

export const Experience = () => {
    return <Grid container alignItems="center" justifyContent="start" direction="column" sx={{ml: 1}}>
        <Grid item><Typography variant="h4" component="h2">Experience</Typography></Grid>
            {
                experiences.map((experience, index) => 
                    <Grid container key={index} direction="column">
                        <Grid container xs={12} direction="row" sx={{justifyContent: {xs: "center", lg: "start"}}}>
                            <Typography fontWeight="bold" sx={{textDecoration: "underline"}}>{experience.title}</Typography>
                            <Typography fontWeight="bold" sx={{textDecoration: "unset", mx: 1}}>@</Typography>
                            <Typography fontWeight="bold" sx={{textDecoration: "underline"}}>{experience.company}</Typography>
                        </Grid>
                        <Grid container justifyContent="space-around">
                            <List>
                                {
                                    experience.points.map((point, pointIndex) => 
                                        <Stack key={pointIndex} direction="row" alignItems="center">
                                            <CircleIcon sx={{fontSize: "5px"}}/>
                                            <ListItemText sx={{textAlign: "left", ml: 1}} key={pointIndex} primary={point} />
                                        </Stack>
                                        )
                                }
                            </List>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
}