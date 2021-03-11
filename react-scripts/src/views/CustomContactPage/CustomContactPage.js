import React from 'react';
import {Backdrop, CircularProgress, Divider, Snackbar} from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Contact, Form, Hero } from './components';

import { mapData } from './data';
import {postData ,BASE_URL } from '../../service/request'
import MuiAlert from "@material-ui/lab/Alert";
import {makeStyles} from "@material-ui/core/styles";

const vertical = 'top';
const horizontal = 'right';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const CustomContactPage = () => {

  const classes = useStyles();

  const [openSnack, setOpenSnack] = React.useState(false);
  const [openLoader, setOpenLoader] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };


  const postSubmission = (formValues,callback)=>{
    callback();
    setOpenLoader(true);
    postData(BASE_URL,
      formValues)
      .then(data => {
        setOpenLoader(false);
        setOpenSnack(true);
      });


  };




  return (
  <div>
    <Hero/>
    <Contact data={mapData}/>
    <SectionAlternate>
      <Form  postSubmission={postSubmission}/>
    </SectionAlternate>
    <Divider/>
    <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}
              anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}
              TransitionComponent='TransitionRight'
    >
      <Alert onClose={handleClose} severity="success">
        Thank you for contacting us. We will reply shortly
      </Alert>
    </Snackbar>
    <Backdrop className={classes.backdrop} open={openLoader} >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
  )
};

export default CustomContactPage;
