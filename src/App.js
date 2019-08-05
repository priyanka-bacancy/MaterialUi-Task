import React, { useState } from 'react';
import './App.css';
import { Tabs, Tab, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import AllFiles from './AllFiles';

const App = ({ classes }) => {
  const [value, setValue] = useState(3)

  return (
    <Grid>
      <Tabs
        value={value}
        // indicatorColor="#5d9e8a"
        indicatorColor="primary"
        onChange={(e, val) => setValue(val)}
        classes={{ root: classes.root }}
      >
        <Tab
          xs={2}
          label="Profile"
          classes={{ selected: classes.selected }}
          className={classes.tabBorder}
        />
        <Tab
          xs={2}
          label="Academic Data"
          classes={{ selected: classes.selected }}
          className={classes.tabBorder}
        />
        <Tab
          xs={2}
          label="Personal Data"
          classes={{ selected: classes.selected }}
          className={classes.tabBorder}
        />
        <Tab
          xs={2}
          label="All Files"
          classes={{ selected: classes.selected }}
          className={classes.tabBorder}
        />
        <Tab
          xs={2}
          label="To-do"
          classes={{ selected: classes.selected }}
          className={classes.tabBorder}
        />
      </Tabs>
      <Grid item>
        {
          (value === 3)
            ? <AllFiles />
            : <React.Fragment>In Progress...</React.Fragment>
        }
      </Grid>
    </Grid>
  );
}

const AppStyle = {
  root: {
    background: '#a08c6b',
    objectFit: 'contain',
    border: '5px solid #a08c6b',
  },
  selected: {
    background: '#5d9e8a',
  },
  tabBorder: {
    border:'3px solid #8b6f47',
    height: '80px',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '15px'
  },
}

export default withStyles(AppStyle)(App);
