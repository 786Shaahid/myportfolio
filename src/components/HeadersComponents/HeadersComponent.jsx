import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import  {Decorator}  from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <Typography varinat='h3' component='h4' className={classes.headerTitle}>
          I'm a Full Stack Web Developer<span style={{ paddingRight: "5px" }}></span>
          
        </Typography>
        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
          I Create Website And Application,
          <br />
          Based On Your Needs...
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  );
}