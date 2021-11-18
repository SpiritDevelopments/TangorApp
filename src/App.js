import React, { Component } from 'react';

// コンテナ読み込み
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import RouteRelatedBottomNavigation from './containers/RouteRelatedBottomNavigation';
import Notification from './containers/Notification';
import Home from './containers/Home';
import Info from './containers/Info';
// import Card from './containers/Card';
import Settings from './containers/Settings';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';


// 不明なRouteは全てNotFound
const NotFound = () => {
  return(
    <h2>ページが見つかりません</h2>
  )
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <Notification/>
        <ResponsiveDrawer className="ResponsiveDrawer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info}/>
            {/* <Route exact path="/card" component={Card}/> */}
            <Route exact path="/settings" component={Settings}/>
            <Route component={NotFound}/>
          </Switch>
        </ResponsiveDrawer>
        <RouteRelatedBottomNavigation/>
      </div>
    );
  }
}


// React-Router情報取得
export default App;
