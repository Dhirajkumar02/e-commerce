import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', pt: 6, px: 2 }}>
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        textAlign={{ xs: 'center', md: 'left' }}
      >
        {/* Column 1 */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2, textTransform: 'uppercase' }}>Company</Typography>
          {['About', 'Blog', 'Press', 'Jobs', 'Partners'].map((text) => (
            <Typography key={text} sx={{ mb: 1 }}>{text}</Typography>
          ))}
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2, textTransform: 'uppercase' }}>Solutions</Typography>
          {['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'].map((text) => (
            <Typography key={text} sx={{ mb: 1 }}>{text}</Typography>
          ))}
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2, textTransform: 'uppercase' }}>Documentation</Typography>
          {['Guides', 'API Status'].map((text) => (
            <Typography key={text} sx={{ mb: 1 }}>{text}</Typography>
          ))}
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2, textTransform: 'uppercase' }}>Legal</Typography>
          {['Claim', 'Privacy', 'Terms'].map((text) => (
            <Typography key={text} sx={{ mb: 1 }}>{text}</Typography>
          ))}
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box textAlign="center" pt={6} pb={4}>
        <Typography variant="body2" gutterBottom>
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Made with love by Me.
        </Typography>
        <Typography variant="body2">
          Icons made by{' '}
          <Link href="https://www.freepik.com" target="_blank" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" target="_blank" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;