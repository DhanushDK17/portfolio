import { Avatar } from "@mui/material"
import avatar from '../assets/avatar.png'
export const Hero = () => {
    return <>
        <Avatar alt="Dhanush Kumar" src={avatar} sx={{ width: 300, height: 300 }}/>
    </>
}