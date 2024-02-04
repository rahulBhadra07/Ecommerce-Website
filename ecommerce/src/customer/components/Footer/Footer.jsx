import React from 'react'
import { Button, Grid, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <div className="centered-text">
            <Grid className='bg-black text-white text-centre  mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Solution</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Partnet</Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Guides</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Documentation</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Claim</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Legal</Button>
                    </div>

                </Grid>


            </Grid>

        </div>
    )
}

export default Footer;
