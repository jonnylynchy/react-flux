import React from 'react';
import MessageList from './MessageList.jsx';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  constructor(){
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue100,
      primary3Color: Colors.blue700,
      accent1Color: Colors.pink400
    });
  }
  // 
  // static childContextTypes = {
  //   muiTheme: React.PropTypes.object
  // }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){
    return (
      <div>
        <AppBar title="Awesome Chat App" />
        <MessageList />
      </div>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;
