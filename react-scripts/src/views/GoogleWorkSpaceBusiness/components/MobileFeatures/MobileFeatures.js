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


import slideIcon from './icons/Slides_Product_Icon.svg'
import docsIcon from './icons/Docs_Product_Icon.svg'
import sheetIcon from './icons/Sheets_Product_Icon.svg'
import keepIcon from './icons/keep.png'

import driveIcon from './icons/Drive_Product_Icon.svg'
import cloudSearchIcon from './icons/hh_google_cloud_search_64dp.png'

import appsheetIcon from './icons/appsheets.svg'
import formsIcon from './icons/Forms_Product_Icon.svg'
import sitesIcon from './icons/Sites_Product_Icon.svg'

import adminIcon from './icons/security/Admin.svg'
import endpointIcon from './icons/security/endpoint.png'
import vaultIcon from './icons/security/vault.png'
import workInsightIcon from './icons/security/work_insights.png'


import makeDecisionLogo from './make_decisions_faster.png'
import collaborateLogo from './collaborate real time.png'
import onlineStorage from './online_storage.png'
import lessItLogo from './Less_IT_more business.png'
import securityLogo from './administration.png'


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
      height: 212
    },
    height: 318,
    width:600
  },
  lessItImage:{
    [theme.breakpoints.down('sm')]: {
      maxWidth: 350,
      height: 226
    },
    height: 388 ,
    width:600
  },
  adminImage:{
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      height: 250,
      padding :10
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
    'mail':mailIcon,'chat':chatIcon,'calendar':calendarIcon, 'currents':currentsIcon, 'meet':meetIcon,
    'slide': slideIcon, 'doc':docsIcon, 'sheet':sheetIcon,'keep':keepIcon,
    'drive':driveIcon, 'cloudSearch':cloudSearchIcon,
    'form':formsIcon, 'site':sitesIcon, 'appsheet':appsheetIcon,
    'admin':adminIcon, 'endpoint':endpointIcon, 'vault':vaultIcon, 'workInsight':workInsightIcon
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, officeItems, storeItems, itItems, adminItems } = data;

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
                label="stay productive"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Collaborate in real-time
                    </Typography>{' '}
                  </span>
                }
                subtitle="Multiple people can work at the same time on a single document (you can control who gets permission to edit, view or just comment), seeing the edits as others type simultaneously. Every change is saved automatically with ability to track and undo all the revisions."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {officeItems.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
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
                label="stay organized"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Organize and access files faster
                    </Typography>{' '}
                  </span>
                }
                subtitle="Google Workspace provides flexible cloud storage options. Keep files private until you decide to share them with one click. Use shared drives to store your team’s or company's data.
Use the power of Google to search your private or the shared files."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {storeItems.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
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
                label="stay agile"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Less coding, more business
                    </Typography>{' '}
                  </span>
                }
                subtitle="Create online applications for internal use or wider public. Easily build survey forms, websites, interactive applications without any coding required: just click, drag or drop. The design will rearrange automatically with a grid layout. Sharing permissions, access and ownership can be easily managed."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {itItems.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
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
                src={lessItLogo}
                alt="..."
                className={classes.lessItImage}
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
                src={securityLogo}
                alt="..."
                className={classes.adminImage}
                lazy={false}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="stay secure"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Embrace Google level of security
                    </Typography>{' '}
                  </span>
                }
                subtitle="Protect your organization using integrated Cloud Identity to manage users and set up security options like 2-step verification. Use device management to distribute apps on mobile devices and limit data access. Track your organizations security and collaboration patterns with reports."
                align="left"
                disableGutter
              />
              <List disablePadding>
                {adminItems.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
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
