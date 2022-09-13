import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../styles/Banner.module.css'
import { useRouter } from 'next/router'

const Banner = () => {
    const router = useRouter()
    return (
        <section className={styles.banner}>
            <Typography
                variant='h6'
                className="textPrimary"
                sx={{
                    fontFamily: 'fira code',
                    fontSize: { xs: '14px', md: '18px' },
                    fontWeight: '400'
                }}
            >Hi, my name is</Typography>

            <Typography variant='h2'
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '45px', sm: '55px', md: '80px' },
                    my: 2
                }}
            > Suronjit Pal. </Typography>
            <Typography variant='h2'
                color='secondary.contrastText'
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '35px', sm: '45px', md: '70px' },
                    my: 2
                }}
            > I build things for the web. </Typography>
            <Box sx={{
                maxWidth: '470px',
                textAlign: 'justify',
                my: 3
            }}>
                <Typography variant='p' color='#8892b0' sx={{ lineHeight: '1.5' }}>
                    I’m a web developer specializing in frontend (and occasionally on backend) exceptional digital experiences. Currently, I&apos;m focusing on the backend to master it.
                </Typography>
            </Box>

            <Button variant="outlined" onClick={()=>router.push('/')} color="info" size='large'> Check  out  my  course! </Button>


        </section>
    );
};

export default Banner;