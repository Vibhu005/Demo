import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Menu, MenuItem } from "@material-ui/core";
import Tabs from "./Tabs/Tabs";

const textData = [
  {
    heading: "What is Lorem Ipsum?",
    paira:
      "What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum",
  },
  {
    heading: "What is Lorem Ipsum?",
    paira:
      "What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className="header-container">
            <Grid item xs={1}>
              <Box className="header_logo"></Box>
            </Grid>
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li onClick={handleClick}>Contact</li>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </ul>
            </nav>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="content">
            <Tabs />
            {/* <Box>
              <img src="/assests/image/net-2.jpg" alt="net" />
            </Box> */}
            {textData.map((item) => {
              return (
                <>
                  <Box key={item}>
                    {/* <Typography className="text">
                      <h2>{item.heading}</h2> <br />
                      {item.paira}
                    </Typography> */}
                  </Box>
                </>
              );
            })}

            {/* <About /> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
