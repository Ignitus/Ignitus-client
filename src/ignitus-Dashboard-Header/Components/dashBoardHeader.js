import React from 'react';
import {  Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import _ from 'lodash';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchUsers from '../constants';
import logo from '../../ignitus-Assets/Images/nav-logo.svg';
import { withErrorBoundary } from '../../ignitus-Internals';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appbarContainer: {
    color: '#000066',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
  },
  title: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    color: '#000066',
    paddingLeft: '10px',
    paddingRight: '10px',
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    margin: '5px',
    padding: '5px',
    background: '#FFFFFF',
    border: '1px solid #000066',
    boxSizing: 'border-box',
    borderRadius: '9px',
    transition: theme.transitions.create('width'),
    width: '220px',
    height: '30px',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  onlineContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },

  statusListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#000066',
      cursor: 'pointer',
      color: '#F7F7F7',
    },
  },

  dropDownContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  divDropDown: {
    background: '#FFFFFF',
    width: '98.37px',
    border: '0.25px solid #BBBBBB',
    boxSizing: 'border-box',
    borderRadius: '16px 0px 16px 16px',
  },

  loginContainer: {
    '&:before': {
      borderBottom: 'none',
    },
  },

  button: {
    margin: theme.spacing.unit,
    width: '145px',
    lineHeight: '1',
    backgroundColor: '#000066',
    borderRadius: '9px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '16px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#000066',
      color: '#FFFFFF',
    },
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

  nameDropDown: {
    width: '156px',
    background: '#FFFFFF',
    border: '0.25px solid #BBBBBB',
    boxSizing: 'border-box',
    borderRadius: '16px 0px 16px 16px',
    left: 'inherit',
    textAlign: 'center',
  },
  nameListItem: {
    borderBottom: '0.25px solid #BBBBBB',
    padding: '10px',
    '&:hover': {
      background: '#000066',
      color: '#FFFFFF',
    },
  },
  nameLastListItem: {
    padding: '10px',
    '&:hover': {
      background: '#000066',
      color: '#FFFFFF',
    },
  },
  toolbarContainer: {
    alignItems: 'flex-start',
  },
  searchContainer: {
    width: '220px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    height: '250px',
    overflow: 'scroll',
    borderRadius: '0px 16px 16px 16px',
    background: '#FFFFFF',
    color: '#000066',
  },
  searchItems: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

class dashBoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      anchorEl: null,
      mobileMoreAnchorEl: null,
      nameDropDownDisplay: false,
      searchwords: false,
    };
    this.logout = this.logout.bind(this);
    this.nameDropDownDisplay = this.nameDropDownDisplay.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    console.log('this', this);
  }

  logout() {
    localStorage.clear();
    this.props.logUserOut();
    this.setState({ redirect: true });
  }


  handleProfileMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  }

  handleMobileMenuOpen(event) {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  }

  handleMobileMenuClose() {
    this.setState({ mobileMoreAnchorEl: null });
  }

  nameDropDownDisplay() {
    let { nameDropDownDisplay } = this.state;
    this.setState({ nameDropDownDisplay: !nameDropDownDisplay });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const { classes } = this.props;
    const { anchorEl, mobileMoreAnchorEl, nameDropDownDisplay, searchwords } = this.state;

    if (localStorage.getItem('data')) {
      console.log(localStorage.getItem('data'));
      email = JSON.parse(localStorage.getItem('data')).email;
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbarContainer}>
          <Toolbar className={classes.toolbarContainer}>
            <HashLink className="navbar-brand" to="/#">
              <img src={logo} width="40" height="40" alt="logo" />
            </HashLink>
            <Typography className={classes.title} variant="h6">
              Home
            </Typography>
            <Typography className={classes.title} variant="h6">
              Internships
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NativeSelect className={classes.loginContainer}>
                <option value="online">Online</option>
                <option value="away">Away</option>
                <option value="offline">Offline</option>
              </NativeSelect>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onClick={this.searchHandler}
                />
                {searchwords &&
                  <List className={classes.searchContainer}>
                    {SearchUsers.map((user) => {
                      return (
                        <ListItem className={classes.searchItems} key={user.id}>
                          <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className={classes.bigAvatar}
                          />
                          <ListItemText primary={user.name} className={classes.searchItems} />
                        </ListItem>
                      );
                    })}
                  </List>
                }
              </div>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={
                  isMenuOpen ? 'material-appbar' : undefined
                }
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
            <div className={classes.dropDownContainer}>
              <Button variant="contained" className={classes.button} onClick={this.nameDropDownDisplay}>
                Sophia
                      <ExpandMoreIcon className={classes.rightIcon} />
              </Button>
              {nameDropDownDisplay && <div>
                <ul className={classes.nameDropDown}>
                  <li className={classes.nameListItem}>Dashboard</li>
                  <li className={classes.nameListItem}>Profile</li>
                  <li className={classes.nameListItem}>Settings</li>
                  <li className={classes.nameListItem}>Privacy Policy</li>
                  <li className={classes.nameLastListItem}>Logout</li>
                </ul>
              </div>}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


dashBoardHeader.propTypes = {
  logUserOut: PropTypes.func.isRequired,
};

export default withErrorBoundary(withStyles(styles)(dashBoardHeader))
