import React from "react";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function Testchangecolor() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="left" className="togglebtn">
            vibhu
            {/* <FormatAlignLeftIcon fontSize="small" /> */}
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
