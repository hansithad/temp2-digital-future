import React from 'react';
import {AppBar, Divider, Drawer, IconButton, Toolbar} from '@material-ui/core';
import { Section, SectionAlternate,ContactForm } from 'components/organisms';
import { Articles,Teaser, Features, Hero, CustomJobs, Newsletter } from './components';

import { aricles, features, jobs } from './data';
import ForumIcon from "@material-ui/icons/Forum";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: theme.palette.background.default,
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
}));

const CustomCareerListingMinimal = () => {

  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div>
      <Hero/>
      <Section>
        <Teaser/>
      </Section>
      <Section>
        <Articles data={aricles}/>
      </Section>
      <Features data={features}/>
      <SectionAlternate>
        <CustomJobs data={jobs}/>
      </SectionAlternate>
      <Section>
        <Newsletter/>
      </Section>
      <Divider/>
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>

    </div>

  )
};

export default CustomCareerListingMinimal;
