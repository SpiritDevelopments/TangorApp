import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// スクロールバー
import { Scrollbars } from 'react-custom-scrollbars';

// スタイル
const styles = theme => ({
  titleImage: {
    width: '100%',
    maxWidth: 700,
  },
  
  button: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
    width: 250,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});


const current_year = (new Date()).getFullYear();
const current_cour = Math.ceil((new Date()).getMonth() / 3);

class Home extends React.Component {

  // ここだけでしか使わないのでRedux未使用;
  state = {
    year: current_year,
    cour: current_cour,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  

  render() {

    // redux関連
    const { actions } = this.props;
    
    // Material-ui関連
    const { classes } = this.props;
    
    // Year入力
    const course = [];
    const course_detail = ['応用情報（AP）','基本情報（FE）'];
    for (var y = 0; y < course_detail.length; y++) {
      course.push(<MenuItem key={y+1} value={y+1}>{course_detail[y]}</MenuItem>);
    }
    // Cours入力
    const janre = [];
    const janre_detail = ['データベース', 'ネットワーク', 'ハードウェア', 'セキュリティ'];
    for (var i = 0; i < janre_detail.length; i++) {
      janre.push(<MenuItem key={i+1} value={i+1}>{janre_detail[i]}</MenuItem>);
    }
              

    return (
      <Scrollbars>
      <div>
        
        {/* <img src="/images/title.png" alt="title" className={classes.titleImage}/> */}
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="year-helper">コース</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange}
              inputProps={{
                name: 'year',
                id: 'year-helper',
              }}
            >
            {course}
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="cour-helper">分野</InputLabel>
            <Select
              value={this.state.cour}
              onChange={this.handleChange}
              inputProps={{
                name: 'cour',
                id: 'cour-helper',
              }}
            >
            {janre}
            </Select>
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => actions.getAnimes(this.state.year, this.state.cour)}
        >
          {course_detail[this.state.year-1]}コース
          <br />{janre_detail[this.state.cour-1]}<br/>の単語を出題
          
        </Button>
        
      </div>
      </Scrollbars>
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Home)
);