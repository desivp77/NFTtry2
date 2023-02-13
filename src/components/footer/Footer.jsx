import * as React from "react";
 
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from "../logo/Logo.jsx";
  
import Container from "@mui/material/Container";
import classNames from "classnames"; 
import styles from "./Footer.module.scss";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#181828',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <div className={classNames(styles.wrapper)}>
    
      <Container className={classNames(styles.container)} maxWidth="xl"> 
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><Logo type="muted"/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Bum All Rights Reserved 2023</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <ButtonGroup className={classNames(styles.policy_buttons)}
            sx={{
                color: "#181828",
                backgroundColor: "#181828"
            }} 
            variant="contained"
            aria-label="Policy buttons"
          >
            <Button>Privacy Policy</Button>
            <Button>Cookie Policy</Button>
          </ButtonGroup>
          </Item>
        </Grid>
      </Grid>
    </Box>
 
    </Container> 

</div>
  );
}

