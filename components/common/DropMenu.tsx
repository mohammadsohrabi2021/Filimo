import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";


import {useState} from "react";
import {movieType} from "../../model/movieType";

interface DropMenuPropsType {
    title: string,
    data: movieType[]
}

const DropMenu = ({title, data}: DropMenuPropsType) => {
    const [display, setDisplay] = useState<boolean>(false)

    return(
        <Grid container width={100} display={'flex'} item alignItems={'center'} height={'100%'} position={'relative'}
              onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            <Grid item display={'flex'}
                  sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                <Typography>
                    {title}
                </Typography>
                {/* <KeyboardArrowDownRoundedIcon/> */}
            </Grid>
            <Grid item container width={400} height={"auto"} bgcolor={'common.black'} display={display ? 'flex' : 'none'}
                  position={'absolute'} top={35} right={0} borderRadius={1} color={'common.white'} zIndex={99}
                  onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
                <Grid item container p={1} display={data.length ===0 ? 'none':'flex'}>
                    {data.map( m => (
                        <Grid item xs={6} key={m.id}>
                            <Typography  sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                                {m.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DropMenu