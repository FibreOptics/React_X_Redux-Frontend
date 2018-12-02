import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeCss';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {
  state = {

  };
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <Typography>Start up your chat by selecting a friend</Typography>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);