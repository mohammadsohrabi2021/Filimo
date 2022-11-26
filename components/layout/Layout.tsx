import {Grid,Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'

import { ReactNode } from "react";

import Logo from '../../assets/image/logo.png'
import DropMenu from "../common/DropMenu";
import { dataTitleNavbar } from "../../data/dataNavbar";

interface LayoutPropsType {
    children: ReactNode
}


const Layout = ({ children }: LayoutPropsType) => {
    return (
        <Grid >
            <Grid xs={12} container width={'100%'} height={{xs:'80px',md:'50px'}}  sx={{ background: 'rgba(0,0,0,.8)' }} pr={{xs:'35px',md:'0px'}}>
                <Grid container item xs={11} alignItems={'center'} justifyContent={'flex-start'} >
                    <Grid display={'flex'} item xs={1.5} justifyContent={'center'}>
                        <Image src={Logo} alt={'logo'} width={80} height={25} />
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} item xs={1} justifyContent={'center'} height={'50%'} alignItems={'center'}>
                        <Divider sx={{ backgroundColor: '#E0E0E0' }} orientation="vertical" variant="middle" />
                    </Grid>
                    <Grid display={{ xs: 'none', md: 'flex' }} item xs={9} justifyContent={'flex-start'} gap={1}>
                        {dataTitleNavbar.map(item => <DropMenu key={item.id} title={item.title} data={item.data} />)}
                    </Grid>
                </Grid>
                <Grid display={'flex'} item container xs={1} justifyContent={'flex-end'}>
                    <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'} ml={2} sx={{ cursor: 'pointer' }}>
                        <Typography display={{ xs: 'flex', md: 'none' }} pl={1} color={'common.white'}><SearchIcon/></Typography>
                        <Avatar sx={{ width: 30, height: 30 }}>
                            <PersonRoundedIcon />
                        </Avatar>
                        <KeyboardArrowDownRoundedIcon sx={{ color: '#E0E0E0' }} />
                    </Grid>
                </Grid>
                <Grid display={{ xs: 'flex', md: 'none' }} sx={{overflow:'scroll'}} item xs={12} justifyContent={'flex-start'} gap={3}pr={{sm:'30px'}} >
                    {dataTitleNavbar.slice(0,7).map(item => <DropMenu key={item.id} title={item.title} data={item.data} />)}
                </Grid>
            </Grid>
            {children}
        </Grid>
    )
}

export default Layout