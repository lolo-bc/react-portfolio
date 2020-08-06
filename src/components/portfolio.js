import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

// import Image from 'material-ui-image';

// photos
import LokalPhoto from '../photos/lokalMockUp.png';
import BookPhoto from '../photos/BookclubMockUP.png';
import DonutPhoto from "../photos/donutMockup.png";
import QuizPhoto from "../photos/quizMockUp.png";
import TranslatorPhoto from "../photos/TranslatorMockup.png";
import WeatherPhoto from "../photos/weatherMockup@2x.png"
import BudgetPhoto from "../photos/budgetMockUp.png"


const preventDefault = (event) => event.preventDefault();

const useStyles = makeStyles((theme) => ({
    root: {
      // width: '95vw',
      height: '90vh',
      overflow: 'scroll',
      paddingRight: "30px",
      paddingLeft: "10px",
      marginBottom: "0px"
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
    },

    what: {
        height: "500px",
        margin: "0 auto"
    }

  }));
  
  export default function SimpleAccordion() {
    const classes = useStyles();
  
    return (
      <main>
      <div  className={classes.root} >
       <h1 className={classes.heading} >Most Recent Work</h1>
       {/* lokal */}
       <Fade in="onEnter">
        <Grid className="Portfolio" container spacing={1}>
          <Grid item lg={7} xs={12}>
            {/* <Fade in="onEnter"> */}
            <img className={classes.what}  src={LokalPhoto} alt="idkman" />

            {/* </Fade> */}
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Lokal</h1> 
              <h2>Full Stack Developer</h2>
              <p id="descrip"> 
                Lokal is a place where local businesses can easily create a web presence for themselves and be discovered by consumers who are looking for small businesses to support.              </p>  
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Produced the idea, Created brand identity and UI design, wrote the front end and back end code, including building react modules, and the design and layout of site              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                MERN Stack (Mongo, Express, React, Node), Firebase, OTP, Cloudinary, Google Maps, EmailJS, Heroku, HTML, CSS, ES6, Adobe Creative Suite, Robo 3T, Bootstrap
               </p>
                  <Fab className="iconLink" href="//radiant-coast-84828.herokuapp.com/" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/Lokal" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
            </div>

          </Grid>
        </Grid>
        </Fade>

        {/* Bookclub */}
        <Grid className="Portfolio" container spacing={2}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={BookPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>My BookClub</h1> 
              <h2>Front End Developer</h2>
              <p id="descrip"> 
                Book club is a way for you to find top book recommendations and save ideas for what book to read next. Join an online book club, add your own suggestions for what you think the club should read next, or create your own book club. 
              </p>  
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Collaborated on creation of idea and implementation, Created brand statement UI design, wrote the front and some back end code, responsiveness, configure API's,  design and layout of site
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                  MySQL, jQuery, Node.js, New York Times API, Google Books, Heroku, HTML, CSS, ES6, Adobe XD wireframes, MySQLWorkbench, Materialize CSS framework
                </p>
                  <Fab className="iconLink" href="//book-club-application.herokuapp.com" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/BookClub" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
  
            </div>

          </Grid>
        </Grid>

        {/* Budget App */}
        <Grid  className="Portfolio"  container spacing={2}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={BudgetPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Offline Budget Tracking App</h1> 
              <h2>Full Stack Developer</h2>
              <p id="descrip"> 
                Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. This simple application uses Webpack and Indexddb to create an app that you can download off the web and continue to use even without any kind of internet access. Buget Tracker is a Progressive Web App (PWA) that is a cross-platform, no-download experience with all the benefits of a web app and a native app.              </p>  
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Produced the idea, Created front end, back end, built WPA, and page design 
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
              HTML, CSS, ES6, MongoDB, Indexdd, Express, Morgan, Mongoose, Webpack (WebpackPwaManifest & babel-loader)
                </p>
                  <Fab className="iconLink" href="//wpa-budget-app.herokuapp.com/" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/Budget-Tracker" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
  
            </div>

          </Grid>
        </Grid>


        {/* Donut */}
        <Grid  className="Portfolio"  container spacing={1}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={DonutPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Donut Eater</h1> 
              <h2>Full Stack Developer</h2>
              <p id="descrip"> 
                Donut-Eater is a fun one page app I built that logs what donuts you've eaten with MySQL, Handlebars, MVC, and a homemade ORM. Donut Eater is a donut shop that lets users input the names of donuts they'd like to make, and then eat them!     
              </p>         
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Produced the idea, Created front end, back end, set up API's, and page design 
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                MySQL, Node.js, Handlebars, Heroku, HTML, CSS, ES6, Adobe Illustrator
               </p>
                  <Fab className="iconLink" href="//rocky-earth-61463.herokuapp.com" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/donut-eater" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
            </div>

          </Grid>
        </Grid>

        {/* Weather */}
        <Grid  className="Portfolio" container spacing={1}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={WeatherPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Weather Dashboard</h1> 
              <h2>Full Stack Developer</h2>
              <p id="descrip"> 
                This is a simple web app that uses API's to pull information on current and upcoming weather conditions. The user can search for a city anywhere in the world, and return the weather data for that day as well as the next 5 upcoming days. Additionally, this app currently saves the users most recent search and repopulates the information when the page is reloaded.
              </p>         
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Produced the idea, Created front end, back end, set up API's, and page design 
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                Session Storage, Node.js, jQuery, HTML, CSS, ES6
               </p>
                  <Fab className="iconLink" href="//lolo-bc.github.io/Weather-App/" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/Weather-App" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
            </div>

          </Grid>
        </Grid>

        {/* Translator */}
        <Grid  className="Portfolio" container spacing={1}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={TranslatorPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Fancy Text Translator </h1> 
              <h2>Front End Developer</h2>
              <p id="descrip"> 
                A small mobile first-designed application that allows the user to generate random quotes or enter text and translate it to a "language" of their choice selected from a menu system
              </p>         
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Collaborated on the idea, Designed wireframes and Created front end, and page design 
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                Fun Translations API, Moment.JS API, Node.js, jQuery, HTML, CSS, ES6, Materialize Framework
               </p>
                  <Fab className="iconLink" href="//saunderseddie.github.io/QuoteConvertor/index.html" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/QuoteConvertor" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
            </div>

          </Grid>
        </Grid>

        {/* Code Quiz */}
        <Grid  className="Portfolio" container spacing={1}>
          <Grid item lg={7} xs={12}>
             <img className={classes.what}  src={QuizPhoto} alt="idkman" />
          </Grid>
          <Grid item lg={5} xs={12}>

            <div>   
              <h1>Javascript Quiz</h1> 
              <h2>Full Stack Developer</h2>
              <p id="descrip"> 
                An quiz style game built to test your knowledge of Javascript! You have until the timer runs out to answer all the questions, your initials and your final time is saved in session storage as your score. 
              </p>         
              <p className="sectionTitle" >Role</p>
              <p id="descrip"> 
                Produced the idea, Created front end, back end, and page design 
              </p>
              <p className="sectionTitle" >Code</p>
              <p id="descrip"> 
                MomentJS, HTML, CSS, ES6,
               </p>
                  <Fab className="iconLink" href="//lolo-bc.github.io/JS-Quiz/Index.html" aria-label="edit"><LaunchOutlinedIcon /> </Fab> 
                  <Fab className="iconLink" href="//github.com/lolo-bc/JS-Quiz" aria-label="edit"><CodeOutlinedIcon /> </Fab> 
            </div>

          </Grid>
        </Grid>


      </div>
      </main>
    );
  }
