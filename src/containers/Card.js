import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import TinderCard from 'react-tinder-card';

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

class Card extends React.Component {
    render(){
    const onSwipe = (direction) => {
        // console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        // console.log(myIdentifier + ' left the screen')
      }
      
      return (<div>
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
        </div>
      );
    }     
}

// Material-ui関連
Card.propTypes = {
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
    withStyles(styles, { withTheme: true })(Card)
  );