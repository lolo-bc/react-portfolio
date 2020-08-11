import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css"

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));
function About() {
    
    const classes = useStyles();

return (
    <div className="homeBodyContaier">
     {/* <Avatar alt="Lauren Cameron" className={classes.large}  src="https://github.com/lolo-bc/portfolio/blob/master/Assests/photo/datme.JPG?raw=true" /> */}

    <h1>Hi!</h1>  
    <p id="descrip">
    Full Stack Web Developer, passionate about creative problem solving, programming, and the ability to design and create something that can improve lives and communities. This passion came from a love of enhancing user experience with interactive design as well as researching and pulling code apart to see what makes it tick. I enjoy making things that have unique functionality as well as exciting user interfaces.
    </p>
    <p id="descrip">
     I'm a life-long learner who enjoys new challenges and learning opportunities, taking the initiative to acquire new knowledge and skills through developing ideas and projects, enhancing personal and professional development. 
     </p>
     <p id="descrip">
     Graduate of UNC-Chapel Hill Web Development Bootcamp, honing skills in Computer Science applied to JavaScript, Browser Based Technologies (HTML, CSS, JavaScript, React.js, jQuery, React, SQL,  and Mongo.DB), API Interaction, Deployment/Command-Line Fundamentals, Databases, Server-Side Development, and Quality Assurance. I'm looking to add value at an organization to use my skills to engage my creative design and build seamless and user-friendly web sites, as well as continue to develop as a designer and developer.
    </p>

    </div>
)
};

export default About;



