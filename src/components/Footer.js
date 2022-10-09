
import styled, { css } from 'styled-components'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MyFooter = styled.div`
  width:  100%;
  height: 10%;
  background: transparent;
`

function Footer() {
  return (
    <MyFooter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              @ PU South Jam - all rights reserved
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </MyFooter>
  );
}

export default Footer;
