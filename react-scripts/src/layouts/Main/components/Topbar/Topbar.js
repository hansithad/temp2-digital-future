import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';
import dfLogo  from '../../../../assets/images/digital_future_yellow.svg'
import dfLogoDark  from '../../../../assets/images/digital_future_yellow_white.png'

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 0.5,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 150,
      height: '100%',
    },
    objectFit: 'cover',
    width: '240px',
    height: '100%',
  },
  darkLogoImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100,
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 150,
      height: '100%',
    },
    objectFit: 'cover',
    width: '240px',
    height: '100%',
    // filter: 'invert(100%)',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = ({ themeMode, themeToggler, onSidebarOpen, pages, className, ...rest }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;
  const cloudProducts = pages.cloudProducts;
  const businessSolutions = pages.businessSolutions;
  const staffAugmentation = pages.staffAugmentation;
  const digitalTransformation = pages.digitalTransformation;
  const home = pages.home;
  const resources = pages.resources;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
          {
              item.groupTitle && <ListItem disableGutters>
                  <Typography
                      variant="body2"
                      color="primary"
                      className={classes.menuGroupTitle}
                  >
                      {item.groupTitle}
                  </Typography>
              </ListItem>
          }

        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signup} />
          <MenuGroup item={signin} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const CloudProductPages = () => {
    const { products } = cloudProducts.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={products} />
        </div>
      </div>
    );
  };

  const BusinessSolutionsPages = () => {
    const { solutions } = businessSolutions.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={solutions} />
        </div>
      </div>
    );
  };

  const StaffAugmentationPages = () => {
    return (
      ''
    );
  };

  const ResourcesPages = () => {
    return (
      ''
    );
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return <LandingPages />;
    }
    if (id === 'supported-pages') {
      return <SupportedPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }

    if (id === 'cloud-products') {
      return <CloudProductPages />;
    }

    if (id === 'business-solutions') {
      return <BusinessSolutionsPages />;
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="Digital Future">
          <Image
            className={themeMode==='light'? classes.logoImage: classes.darkLogoImage}
            src={themeMode==='light'?dfLogo:dfLogoDark}
            alt="Digital Future"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {[home].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component={'a'}
                  href={page.id}
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
              </ListItem>
            </div>
          ))}

          {[cloudProducts].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ''
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages(page.id)}</div>
              </Popover>
            </div>
          ))}

          {[staffAugmentation].map((page, i) => (
            <div key={page.id}>
                <ListItem
                    aria-describedby={page.id}
                    className={clsx(
                        classes.listItem,
                        openedPopoverId === page.id ? classes.listItemActive : '',
                    )}
                >
                    <Typography
                        variant="body1"
                        color="textPrimary"
                        component={'a'}
                        href={page.id}
                        className={clsx(classes.listItemText, 'menu-item')}
                    >
                        {page.title}
                    </Typography>
                </ListItem>
            </div>
          ))}
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
          </ListItem>

          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="/contact"
              className={classes.listItemButton}
            >
              Contact
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
