import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// スクロールバー
import { Scrollbars } from 'react-custom-scrollbars';

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textLeft: {
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
});


class Info extends React.Component {

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <Scrollbars>
      <div>
        <h2>Tangorについて</h2>
        <div className={classes.textLeft}>
        
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              Tangorとは
            </Typography>
            <Typography component="p">
              【Tango+TinderUI=Tangor】<br/>
              資格試験に出題されたことのある用語を各分野ごとに学習ができます。〇〇ドットコムでは、用語特化のページが無かったので思い付きと勢いで作ってみました笑
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              構成
            </Typography>
            <Typography component="div" className={classes.paragraph}>
              <ul>
                <li>Vercel</li>
                <li>React・Redux・Material-UI</li>
                <li>React-tinder-card</li>
              </ul>
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              ソースなど
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              ソース：
              <a href="https://github.com/SpiritDevelopments/TangorApp" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Typography>
            <Typography component="p">
              Reactに興味がある方は本アプリをベースに何か作ってみては？
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              製作
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              将来、楽をするために技術を学んでいます。アプリは突然やってくるやる気と思い付きで作っています。
            </Typography>
          </Paper>
        </div>
      </div>
      </Scrollbars>
    );
  }
}

// Material-ui関連
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Info);