import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, Paper } from "@material-ui/core";

export default function ImageSelector() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mainimagediv">
      <Paper className="buttonpaper">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className="ImageButton"
            src="assests/image/net-4.jpg"
            alt="btn"
          />
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className="ImageButton"
            src="assests/image/net-2.jpg"
            alt="btn"
          />
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className="ImageButton"
            src="assests/image/net-1.jpg"
            alt="btn"
          />
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className="ImageButton"
            src="assests/image/net-2.jpg"
            alt="btn"
          />
        </Button>
      </Paper>
      <Menu
        className="ViewPage"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "right",
          horizontal: "top",
        }}
      >
        <MenuItem onClick={handleClose}>
          <img className="ImageView" src="assests/image/net-2.jpg" />
        </MenuItem>
      </Menu>
    </div>
  );
}
