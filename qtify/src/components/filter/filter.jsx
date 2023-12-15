import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
import "./filter.css";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabPanel-${index}`,
    };
  }
  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--primary)",
          },
        }}
        >
        {filters.map((ele, idx) => {
          return <Tab className="filter-tab" label={ele.label} {...a11yProps(idx)} />;
        })}
      </Tabs>
      {filters.map((ele, idx) => {
        return <TabPanel value={ele.label} index={idx} />;
      })}
    </div>
  );
}