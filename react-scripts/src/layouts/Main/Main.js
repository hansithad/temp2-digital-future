import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    cloudProducts:{
        title: 'Cloud Products',
        id: 'cloud-products',
        children:{
            products: {
                groupTitle: '',
                pages: [
                    {
                        title: 'Google Workspace Business',
                        href: '/google-workspace-business',
                    },
                    {
                        title: 'Google Workspace Enterprise',
                        href: '/rental',
                    },
                    {
                        title: 'Chrome Enterprise',
                        href: '/job-listing',
                    },
                    {
                        title: 'Meet Hardware',
                        href: '/e-learning',
                    },
                    {
                        title: 'Google BigQuery',
                        href: '/e-commerce',
                    },
                    {
                        title: 'Data Dashboards',
                        href: '/expo',
                    },
                ],
            },
        }
    },
    businessSolutions:{
        title: 'Business Solutions',
        id: 'business-solutions',
        children:{
            solutions: {
                groupTitle: '',
                pages: [
                    {
                        title: 'Digital & Remote Workplace',
                        href: '/coworking',
                    },
                    {
                        title: 'Data Management',
                        href: '/rental',
                    },
                    {
                        title: 'Cloud for Marketing',
                        href: '/job-listing',
                    }
                ]
            },
        }
    },
    home:{
      title: 'Home',
      id: '/',
      children:{

      }
    },
    digitalTransformation:{
      title: 'Digital Transformation',
      id: 'digital-transformation',
      children:{

      }
    },
    staffAugmentation:{
        title: 'Talent Augmentation',
        id: 'talent-augmentation',
        children:{

        }
    },
    resources:{
        title: 'Resources',
        id: 'resources',
        children:{

        }
    },
    landings: {
      title: 'Landings',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Digital Transformation',
              href: '/',
            },
            {
              title: 'Talent Augmentation',
              href: '/rental',
            }

          ],
        },
        apps: {
          groupTitle: 'Apps',
          pages: [
            {
              title: 'Desktop App',
              href: '/desktop-app',
            },
            {
              title: 'Mobile App',
              href: '/mobile-app',
            },
          ],
        },
        web: {
          groupTitle: 'Digital Talent',
          pages: [
            {
              title: 'Dedicated Requirement',
              href: '/talent-augmentation',
            },
            {
              title: 'Managed HR Processes',
              href: '/talent-augmentation',
            },
            {
              title: 'Managed Talent Augmentation',
              href: '/talent-augmentation',
            }
          ],
        },
      },
    },
    pages: {
      title: 'Pages',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Digital Transformation',
          pages: [
            {
              title: 'Data Strategy',
              href: '/digital-transformation',
            },
            {
              title: 'Cloud Strategy',
              href: '/digital-transformation',
            },
            {
              title: 'Martech Strategy',
              href: '/digital-transformation',
            },
          ],
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [
            {
              title: 'Overview',
              href: '/help-center',
            },
            {
              title: 'Article',
              href: '/help-center-article',
            },
          ],
        },
        company: {
          groupTitle: 'Contact',
          pages: [
            // {
            //   title: 'About',
            //   href: '/about',
            // },
            // {
            //   title: 'About (Cover)',
            //   href: '/about-side-cover',
            // },
            // {
            //   title: 'Pricing',
            //   href: '/pricing',
            // },
            // {
            //   title: 'Terms',
            //   href: '/company-terms',
            // },
          ],
        },
        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Reach View',
              href: '/contact-page',
            },
            {
              title: 'Sidebar Map',
              href: '/contact-sidebar-map',
            },
            {
              title: 'Cover',
              href: '/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/blog-newsroom',
            },
            {
              title: 'Reach View',
              href: '/blog-reach-view',
            },
            {
              title: 'Search',
              href: '/blog-search',
            },
            {
              title: 'Article',
              href: '/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/agency',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/account/?pid=billing',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/signup-simple',
            },
            {
              title: 'Cover',
              href: '/signup-cover',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/signin-simple',
            },
            {
              title: 'Cover',
              href: '/signin-cover',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/password-reset-simple',
            },
            {
              title: 'Cover',
              href: '/password-reset-cover',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/not-found',
            },
            {
              title: 'Cover',
              href: '/not-found-cover',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} themeMode={themeMode} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
