import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from '../styles/About.module.css'



const About = () => {
    return (
        <section>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item md={7} sx={{ order: { xs: 2, md: 1 }, my: 10 }}>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            mb: 4,
                        }}>
                        <Typography variant='h5' gutterBottom noWrap='true'><span className="textPrimary fontPrimary"> 01. </span> About me</Typography>
                        <Box sx={{
                            height: '1px',
                            width: '300px',
                            backgroundColor: "#8892b0"
                        }} ></Box>
                    </Box>
                    <Typography variant='p' color='#8892b0' sx={{ lineHeight: '1.6' }}>
                        Hello! My name is Suronjit and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try make awesome websites.
                        <br />
                        <br />
                        Now I am studying at Bangabandhu Sheikh Mujibur Rahman Science And Technology University.My main focus these times is building accessible, inclusive products and digital experiences for a variety of clients.
                        <br />
                        <br />
                        Here are a few technologies I’ve been working with recently:
                        <Box class={styles.skill} sx={{display: 'flex'}}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Material Ui</li>
                                <li>JavaScript (ES6+)</li>
                            </ul>
                            <ul style={{marginLeft: '30px'}}>
                                <li>React js</li>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>MongoDB</li>
                            </ul>
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={5} sx={{
                    display: 'flex',
                    width: '100%',
                    justify: 'center',
                    order: { xs: 1, md: 2 },
                    my: 10
                }}>
                    <Box sx={{ display: 'flex', mx: 'auto' }}>
                        <span className={styles.about_img}>
                            <Image src='/images/user.jpg' width='300px' height='386px' alt="user" />
                        </span>
                    </Box>
                </Grid>

            </Grid>
        </section>
    );
};

export default About;