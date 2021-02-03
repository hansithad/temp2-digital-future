import React from 'react';
import {makeStyles, useTheme, Divider, AppBar, Toolbar, IconButton, Drawer} from '@material-ui/core';
import { Section, SectionAlternate,ContactForm } from 'components/organisms';
import { GetStarted, Features, Reviews, QuickStart, Services, Hero } from './components';
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles((theme) => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },

    appBarBottom: {
        top: 'auto',
        bottom: 0,
        background: 'transparent',
        boxShadow: 'none',
    },

    contactForm: {
        padding: theme.spacing(3, 2),
        maxWidth: 800,
        margin: '0 auto',
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
        color: 'white',
        width: 25,
        height: 25,
    },


}));

const IndexView = ({ themeMode }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
        setOpenBottombar(true);
    };

  const handleBottombarClose = () => {
        setOpenBottombar(false);
    };

  return (
    <div>
      <Hero themeMode={themeMode} />
      <Divider />
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
      {/*<Services />*/}
      {/*<SectionAlternate className={classes.sectionAlternateNoPaddingTop}>*/}
        {/*<QuickStart />*/}
      {/*</SectionAlternate>*/}
      {/*<SectionAlternate>*/}
        {/*<Features />*/}
      {/*</SectionAlternate>*/}
      {/*<Section>*/}
        {/*<Reviews />*/}
      {/*</Section>*/}
      {/*<Section className={classes.dividerSection}>*/}
        {/*<Divider />*/}
      {/*</Section>*/}
      {/*<Section narrow>*/}
        {/*<GetStarted />*/}
      {/*</Section>*/}
    </div>
  );
};

export default IndexView;
