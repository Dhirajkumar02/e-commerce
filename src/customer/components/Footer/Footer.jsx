import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
return (
    <div>
        <Grid
        container
        sx={{bgcolor:"black", color:"white", py:3}} 
        className="text-center mt-10"
        spacing={15}
        //justifyContent="space-between"
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{pb:2}} variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h6'>About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Partners</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{pb:2}} variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h6'>About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Partners</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{pb:2}} variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h6'>About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Partners</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{pb:2}} variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h6'>About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6'>Partners</Button>
                </div>
            </Grid>
            
            
        </Grid>
    </div>
)
}

export default Footer