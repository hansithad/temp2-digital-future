import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Icon, Button
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';
import mailIcon from './icons/mail.svg'
import meetIcon from './icons/meet.svg'
import calendarIcon from './icons/calendar.svg'
import chatIcon from './icons/chat.svg'
import currentsIcon from './icons/currents.svg'
import makeDecisionLogo from './make_decisions_faster.png'
import collaborateLogo from './collaborate real time.png'
import onlineStorage from './online_storage.png'


const useStyles = makeStyles(theme => ({

  paddedSubHead:{
    padding:'18px'
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
    height: 700,
    width:381
  },
  collaborateLogoImage:{
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      height:290
    },
    height: 435,
    width:600
  },
  onlineStorageImage:{
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
    height: 318,
    width:600
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const MobileFeatures = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const logoObject = {
    'mail':mailIcon,'chat':chatIcon,'calendar':calendarIcon, 'currents':currentsIcon, 'meet':meetIcon
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, people } = data;

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Everything you need to get anything done{' '}
            <Typography color="secondary" variant="inherit" component="span">now in one place</Typography>
          </span>
        }
        subtitle={
          <span className={classes.paddedSubHead}>
            Forrester has led a research on a model organization and calculated the impact implementing Google Workspace:171hrs more per user per year spent on actual work 20% less on-demand IT tech support time needed.the risk of data breach decreased 95%
          </span>
          }
        fadeUp
      />


      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src={makeDecisionLogo}
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="stay connected"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Make decisions faster
                    </Typography>{' '}
                  </span>
                }
                subtitle="With email as a foundation, you can also chat, make voice or video calls, schedule meetings in shared calendars. All that and much more available one click away, to help you communicate instantly, as if you were face to face."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      {/*<IconAlternate*/}
                        {/*size="small"*/}
                        {/*fontIconClass={item.icon}*/}
                        {/*color={colors.deepOrange}*/}
                      {/*/>*/}
                      <Icon>
                        <img src={logoObject[item.logoKey]} height={50} width={50}/>
                      </Icon>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="get connected"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Share your memories
                    </Typography>{' '}
                    with your travel buddies
                  </span>
                }
                subtitle="Don't listen to what they say go and see. Travelling with our app is easy. Join the biggest community of travellers."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="small"
                        fontIconClass={item.icon}
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src={collaborateLogo}
                alt="..."
                className={classes.collaborateLogoImage}
                lazy={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src={onlineStorage}
                alt="..."
                className={classes.onlineStorageImage}
                lazy={false}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="stay connected"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Make decisions faster
                    </Typography>{' '}
                  </span>
                }
                subtitle="With email as a foundation, you can also chat, make voice or video calls, schedule meetings in shared calendars. All that and much more available one click away, to help you communicate instantly, as if you were face to face."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      {/*<IconAlternate*/}
                      {/*size="small"*/}
                      {/*fontIconClass={item.icon}*/}
                      {/*color={colors.deepOrange}*/}
                      {/*/>*/}
                      <Icon>
                        <img src={logoObject[item.logoKey]} height={50} width={50}/>
                      </Icon>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

MobileFeatures.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default MobileFeatures;
