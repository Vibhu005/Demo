import React from "react";
import SidebarLast from "../../components/sidebarlast";
import Header from "../../components/Header";
import { Box, Grid } from "@material-ui/core";

const Maincontent = () => {
  return (
    <>
      <div className="maincontent">
        <SidebarLast />
        <Header />
      </div>
    </>
  );
};

export default Maincontent;
