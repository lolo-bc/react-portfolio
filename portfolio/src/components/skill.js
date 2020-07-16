import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15%",
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    textAlign: "left",
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px"
  },
  sectionTitle: {
      fontWeight: "400",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      borderBottom: "1px solid #000",
      paddingBottom: "5px"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 className={classes.title} > SKILLS</h1>
        <br></br>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <h3 className={classes.sectionTitle} >Server Side Development</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Node, NPM scripts</li>
                    <li>PWAs/Service Workers</li>
                    <li>User Authentication</li>
                    <li>React.js</li>
                    <li>PWA/Service Workers</li>
                    <li>MERN Stack </li>
                </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
                <h3 className={classes.sectionTitle} >Browser Based Technologies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript (ES5 & ES6)</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                    <li>Handlebars</li>
                    <li>Local Storage, Session Storage, IndexedDB</li>
                    <li>Bootstrap & Materialize frameworks</li>
                    <li>Webpack</li>
                </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <h3 className={classes.sectionTitle} >Design Skills Technologies</h3>
                <ul>
                    <li>Adobe (Photoshop, Illustrator, Xd)</li>
                    <li>Responsive Design</li>
                    <li>UX / UI Design</li>
                    <li>Branding</li>
                    <li>wireframes, prototyping</li>
                </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <h3 className={classes.sectionTitle} >Additionally</h3>
                <ul>
                    <li>Rest</li>
                    <li>JSON</li>
                    <li>API</li>
                    <li>Agile workflows</li>
                    <li>Unit & Functional Testing</li>
                </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
