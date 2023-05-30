import React from "react";
import "./Tabs.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import About from "../about";
import ClickChangecolor from "../ClickChangecolor";
import FullviewImage from "../FullviewImage";
import VVideos from "../VideoPlay/VVideos";
import Formdata from "../Form/Formdata";
import Testchangecolor from "../Testchangecolor";
import Logindata from "../Form/Logindata";
import OnhoverBlog from "../BtechBlog/OnhoverBlog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <div>hello</div> */}
      <div>
        <AppBar className="Tabsdiv" position="static">
          <Tabs
            className="TabsButton"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab className="Tbuttton" label="Item One" {...a11yProps(0)} />
            <Tab className="Tbuttton" label="Item Two" {...a11yProps(1)} />
            <Tab className="Tbuttton" label="Item Three" {...a11yProps(2)} />
            <Tab className="Tbuttton" label="Item Four" {...a11yProps(3)} />
            <Tab className="Tbuttton" label="Item Five" {...a11yProps(4)} />
            <Tab className="Tbuttton" label="Item Six" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} class="MuiBox-root MuiBox-root-11">
          <FullviewImage />
        </TabPanel>
        <TabPanel value={value} index={1} class="MuiBox-root MuiBox-root-14">
          <ClickChangecolor />
        </TabPanel>
        <TabPanel value={value} index={2} class="MuiBox-root MuiBox-root-32">
          {/* <About /> */}
          <OnhoverBlog/>
        </TabPanel>
        <TabPanel value={value} index={3} class="MuiBox-root MuiBox-root-35">
          {/* <Testchangecolor /> */}
          <Logindata />
        </TabPanel>
        <TabPanel value={value} index={4} class="MuiBox-root MuiBox-root-39">
          <Formdata />
        </TabPanel>
        <TabPanel value={value} index={5} class="MuiBox-root MuiBox-root-36">
          {/* <VideoPlav /> */}
          <VVideos />
        </TabPanel>
      </div>
    </>
  );
}
