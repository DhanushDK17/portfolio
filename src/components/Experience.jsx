// MUI imports
import { Grid, Typography, List, ListItemText, Stack } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';

// Data imports
import { experiences } from "../data/experience"

export const Experience = () => {
    return <Grid container alignItems="center" justifyContent="start" direction="column" sx={{ml: 1}}>
        <Grid item><Typography variant="h2">Experience</Typography></Grid>
            {
                experiences.map((experience, index) => 
                    <Grid container key={index} direction="column">
                        <Typography variant="h5" fontWeight="bold" textAlign="left">{experience.company} | {experience.duration}</Typography>
                        <Grid container justifyContent="space-around">
                            <List>
                                {
                                    experience.positions.map((position, posIndex) => 
                                        <Stack key={posIndex}>
                                            <Stack direction="row">
                                                <Typography textAlign="left" fontStyle="italic" fontWeight="bold" sx={{mr: 1}}>{position.title} {position.team ? `@ ${position.team}` : ""}</Typography>                                                    
                                            </Stack>
                                            {
                                                position.points.map((point, pointIndex) =>
                                                    <Stack key={pointIndex} direction="row" alignItems="center">
                                                        <CircleIcon sx={{fontSize: "5px"}}/>
                                                        <ListItemText sx={{textAlign: "left", ml: 1}} key={pointIndex} primary={point} />
                                                    </Stack>
                                                )
                                            }
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