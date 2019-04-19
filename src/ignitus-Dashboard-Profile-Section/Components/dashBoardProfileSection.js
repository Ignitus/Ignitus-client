import React from 'react';
import '../Styles/style.scss';
import { withStyles } from '@material-ui/core/styles';
import { withErrorBoundary } from '../../ignitus-Internals';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import * as data from './Constants';

const styles = () => ({
  card: {
    background: '#FFFFFF',
    /* shadow */
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    width: '276px',
  },
  bigAvatar: {
    width: '89px',
    height: '89px',
    borderRadius: '5px',
    padding: '10px',
  },
  icon: {
    color: '#000066',
    margin: '5px',
  },
  progress: {
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: '14px',
  },
  profileName: {
    fontFamily: 'Raleway',
    textAlign: 'center',
    color: '#000066',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  profileTag: {
    fontFamily: 'Raleway',
    textAlign: 'center',
    color: '#000066',
    fontSize: '12px',
    fontWeight: 500,
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  button: {
    background: '#000066',
    borderRadius: '9px',
    color: '#FFF',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'none',
  },
});

const dashBoardProfileSection = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className="d-flex p-2 pt-4">
        <Avatar
            alt="Sophia"
            src={data.ProfileAvatar}
            className={classes.bigAvatar}
        />
        <div className="ml-3">
          <Typography component="h3" className={classes.profileName}>
            Sophia Carter
          </Typography>
          <Typography component="h5" className={classes.profileTag}>
            Literature Student
          </Typography>
          <Button variant="contained" className={classes.button}>
            View Profile
          </Button>
        </div>
      </div>
      <div className="d-flex p-2">
        <Typography component="p" className={classes.progress}>
          <BookmarkIcon className={classes.icon} />
          21 students and 11 professors are tracking your progress
        </Typography>
      </div>
    </Card>
    /*
      <div className="card-profile-container">
          <div className="d-flex p-2 pt-4">
              <div>
                  <img
                      className="m-1 profile-avatar"
                      alt="card"
                      src={data.ProfileAvatar}
                  />
              </div>
              <div className="ml-3">
                  <h3 className="profile-font profile-name-bold">
                      Sophia Carter
                  </h3>
                  <h5 className="profile-font profile-name-tagline">
                      Literature Student
                  </h5>
                  <button className="btn btn-success btn-rounded button-bg p-1 px-4">
                      <span className="btn-font">View Profile</span>
                  </button>
              </div>
          </div>
          <p className="text-dark profile-name-tagline p-3">
              <i className="fa fa-bookmark round-turnin-icon" />
              21 students and 11 professors are tracking your progress
          </p>
      </div> */
  );
};

export default withErrorBoundary(withStyles(styles)(dashBoardProfileSection));