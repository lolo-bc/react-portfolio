import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../index.css"
import Grid from '@material-ui/core/Grid';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Fab from '@material-ui/core/Fab';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Contact() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    // const [value, setValue] = React.useState('Controlled');

    const [userObject, setUserObject] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (event) => {
      event.preventDefault();
      // setValue(event.target.value);
      setUserObject({
        ...userObject,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(userObject);
      fetch('http://localhost:3001/send',{
        method: "POST",
        body: JSON.stringify(userObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
            handleClick();
        // alert("Message Sent."); 
        // this.resetForm()
      }else if(response.status === 'fail'){
        // handleClick();
        alert("Message failed to send.")
      }
    })

    };

    
  
    return (
      <main className="homeBodyContaier">
      <h1 className="heading" >Get in Touch</h1>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thanks for the Message! I'll get back to you shortly
        </Alert>
      </Snackbar>

      <form  noValidate autoComplete="off" >
            <Grid className="contactForm" container spacing={1}>
                <Grid item xs={6}>
                    <TextField
                    id="standard-textarea"
                    label="Name"
                    name="name"
                    type="name"
                    onChange={handleChange}
                    value={userObject.name}
                    // placeholder="Placeholder"
                    
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="standard-textarea"
                        label="Email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={userObject.email}
                        // placeholder="Placeholder"
                        
                        />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    onChange={handleChange}
                    value={userObject.message}
                    name="message"
                    multiline
                    rows={4}
                    // placeholder="Placeholder"
                    />                
          </Grid>
            </Grid>
       
        <Fab className="iconLink" aria-label="send" id="sendBtn" onClick={handleSubmit} ><SendRoundedIcon /> </Fab> 

      </form>
      </main>
    );
  }
export default Contact;