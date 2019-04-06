import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import logo from '../../ignitus-Assets/Images/nav-logo.svg';
import { withErrorBoundary } from '../../ignitus-Internals';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%'
  },
  appbarContainer: {
    color: '#000066',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex'
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
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    background: '#FFFFFF',
    border: '1px solid #000066',
    boxSizing: 'border-box',
    borderRadius: '9px',
    transition: theme.transitions.create('width'),
    width: '209px',
    height: '30px',
    [theme.breakpoints.up('md')]: {
      width: 200,
    }
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
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
    '&:hover':{
      backgroundColor: '#000066',
      cursor: 'pointer',
      color: '#F7F7F7',
    }
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

  search: {
    alignSelf: 'center'
  },

  loginContainer: {

    '&:before': {
      borderBottom: 'none'
    }
  },

  button: {
    margin: theme.spacing.unit,
    width: '145px',
    backgroundColor: '#000066',
    borderRadius: '9px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: '16px',
    textTransform: 'none'
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class dashBoardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log('this', this);
  }

  logout() {
    localStorage.clear();
    this.props.logUserOut();
    this.setState({ redirect: true });
  }


  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    if (this.state.redirect) {
        return <Redirect to="/" />
    }


    let email = ''
    const { classes } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;

    if (localStorage.getItem('data')) {
        console.log(localStorage.getItem('data'))
        email = JSON.parse(localStorage.getItem('data')).email
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (

        <div className={classes.root}>
            <AppBar className={classes.appbarContainer}>
                <Toolbar>
                    
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
                          <option value="online" selected>Online</option>
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
                            />
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
                    <Button variant="contained" className={classes.button}>
                      Sophia
                      <ExpandMoreIcon className={classes.rightIcon} />
                    </Button>
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
