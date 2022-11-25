import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import {ReactNode} from "react";
import Link from "next/link";

interface MoviesContainerPropsType {
    title: string,
    children: ReactNode,
    link: string
}

const MoviesContainer = ({title, children, link}: MoviesContainerPropsType) => {
    return (
        <Grid container>
            <Grid display={'flex'} item xs={12} justifyContent={'space-between'}>
                <Grid>
                    <Typography fontWeight={'bold'}>
                        {title}
                    </Typography>
                </Grid>
                <Link href={link}>
                    <Grid display={'flex'} color={'error.main'} sx={{cursor: 'pointer'}}>
                        <Typography>
                            مشاهده همه
                        </Typography>
                        <KeyboardArrowLeftRoundedIcon/>
                    </Grid>
                </Link>
            </Grid>
            <Grid container>
                {children}
            </Grid>
        </Grid>
    )
}

export default MoviesContainer