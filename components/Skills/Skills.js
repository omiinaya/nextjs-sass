import Typography from '@mui/material/Typography';
import style from "./Skills.module.scss";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import CodeIcon from '@mui/icons-material/Code';
import Test from '../Test/Test'

export default function Skills() {
    const [mainSlide, setMainSlide] = useState(false);

    useEffect(() => {
        setTimeout(() => { setMainSlide(true) }, 300);
    });

    return (
        <Box>
            <Box sx={{
                ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' }
            }}>
                <Fade in={mainSlide} >
                    <Box className={style.breadcrumb}>
                        <Breadcrumb current={'Skills'} />
                    </Box>
                </Fade>
            </Box>
            <Box sx={{
                ml: { xs: 'none', sm: '50px', md: '70px', lg: '70px' },
                mr: { xs: 'none', sm: '50px', md: '70px', lg: '70px' }
            }}>
                <Slide direction="up" in={mainSlide} className={style.root}>
                    <Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <Typography textAlign="center" className={style.title}>
                                .Skills 
                            </Typography>
                            <CodeIcon sx={{
                                height: '70px',
                                width: '70px',
                                ml: '20px'
                            }}
                            />
                        </Box>
                        <Test />
                    </Box>
                </Slide>
            </Box>
        </Box>
    )
}
