import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImageAvtar from '../components/image-avtar';
import PieChartIcon from '@material-ui/icons/PieChart';
import Star from '@material-ui/icons/Star';
import GavelIcon from '@material-ui/icons/Gavel';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SpeedIcon from '@material-ui/icons/Speed';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Divider from '@material-ui/core/Divider';

import Logo from '../images/logo.jpg';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LanguageIcon from '@material-ui/icons/Language';

import BreadCrumb from './breadcrumb';
import Grid from '@material-ui/core/Grid';

import ContentHeader from './content-header';
import RiskProgressBar from './risk-progress-bar';
import RiskBreakdown from './risk-breakdown';
import RiskThreshold from './risk-threshold';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const drawerWidth = 55;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#fff',
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none'
  },
  logo: {
    height: '100%'
  },
  toolBar:{
    padding: theme.spacing(0, 2),
    minHeight: 52
  },
  menuButton: {
    color: '#3876b1',
    marginRight: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2a2a2a',
    overflowX: "hidden"
  },
  list:{
    padding: 0
  },
  listItem:{
    padding: theme.spacing(2, 1.7),
  },
  listItemIcon:{
    color: '#777',
    '&:hover': {
      color: '#fff'
    }
  },
  content: {
    flexGrow: 1,
    width: "100%",
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navLinks:{
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    color: '#aeaeac',
  },
  arrowDropDown:{
    root: {
      margin: 0,
      endIcon: {
        marginLeft: 0
      }
    }
  },
  navIconButton:{
    margin: theme.spacing(0, 1),
    "&:active": {
      "& svg": {
        transform: "rotate(20deg)",
      }
    }
  },
  navIcon: {
    color: "#3377b4"
  },
  mainContent:{
    padding: theme.spacing(1, 2),
  },
  contentContainer:{
    backgroundColor: "#fff"
  }
}));

function Layout(props) {
  const classes = useStyles();
  let isOpen;
  
  if (isWidthUp('sm', props.width)) {
    isOpen = true;
  }
  else{
    isOpen = false;
  }
  
  const [open, setOpen] = React.useState(isOpen);
  const handleDrawer = () => {
    setOpen(!open);
  };

  const [setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const NewBadge = withStyles({
    badge:{
      position: 'relative',
      transform: 'none',
      fontWeight: 'bold',
      borderRadius: 5,
      padding: '2, 3',
      marginLeft: 5,
      marginTop: 2
    },
    colorPrimary: {
      backgroundColor: "#d64e1c"
    }
  })(Badge)

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="logo" className={classes.logo} />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton className={classes.navIconButton}>
              <LibraryBooksIcon className={classes.navIcon} />
            </IconButton>
              
            <IconButton
              className={classes.navIconButton}
            >
              <LanguageIcon className={classes.navIcon} />
            </IconButton>

            <IconButton 
              className={classes.navIconButton}
            >
              <NewBadge badgeContent={15} color="primary">
                <NotificationsNoneIcon className={classes.navIcon} />
              </NewBadge>
            </IconButton>
            
            <Button className={classes.navLinks} endIcon={<ArrowDropDownIcon className={classes.arrowDropDown} />}>IRM | Analysis</Button>
            <Button className={classes.navLinks} endIcon={<ArrowDropDownIcon className={classes.arrowDropDown} />}>ResCare Enterprise Solution</Button>
            <Button className={classes.navLinks} endIcon={<ArrowDropDownIcon className={classes.arrowDropDown} />}>Jon Stone</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolBar} />
        <List className={classes.list}>
          <ImageAvtar />
          <Divider />

          {[<PieChartIcon />, <GavelIcon />, <AccountTreeIcon />, <Star />, <SpeedIcon />, <LocalHospitalIcon />, <CardTravelIcon />, <DescriptionIcon />, <SettingsIcon />, <HelpOutlineIcon />].map((iconComponent, index) => (
            <ListItem 
              button 
              key={'iconComponent'+index} 
              index={index}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {iconComponent}
              </ListItemIcon>
            </ListItem>
          ))}          
        </List>
      </Drawer>

      <main 
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolBar} />
        
        <BreadCrumb />

        <Grid container className={classes.mainContent}>
          <Grid container className={classes.contentContainer}>
            <ContentHeader />
            <RiskProgressBar />
            <RiskBreakdown />
            <RiskThreshold />
          </Grid>
        </Grid>

      </main>
    </div>
  );
}

export default withWidth()(Layout);
