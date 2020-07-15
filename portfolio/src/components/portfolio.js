import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PortfolioPieces from '../portfolioPieces.json';
import Link from '@material-ui/core/Link';


const preventDefault = (event) => event.preventDefault();

const useStyles = makeStyles((theme) => ({
    root: {
      width: '99%',
    },

    heading: {
        fontWeight: "900",
        letterSpacing: "2px",
        paddingLeft: "17px",
        textTransform: "uppercase"
    },

    accordion: {
        marginBottom: "10px",
        backgroundColor: "rgb(71, 57, 121)",
        color: "white",
        "&:hover": {
            background: "#35bebe"
          },
    },

    title: {
        fontSize: "24px",
        fontWeight: "300",
        letterSpacing: "2px"
    },

    avatar: {
        width: "100%",
    },

    p: {
        fontSize: "20px"
    }

  }));
  
  export default function SimpleAccordion() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h1 className={classes.heading} >Most Recent Work</h1>

        <ul >
         {PortfolioPieces.map(piece => (
         <li key={piece.id}>     

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><h2 className={classes.title}> {piece.title} </h2> </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p className={classes.p} >{piece.description}</p>
            <Link href={piece.url} onClick={preventDefault}>
                Link to live Site
            </Link>
            <br></br>
            <img className={classes.avatar} src={piece.image} alt="screenshot"/>

            </Typography>
          </AccordionDetails>
        </Accordion>
        </li>
         ))}
    </ul>
      </div>
    );
  }
