import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

@connectToStores
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

  // Subscriptions
  static getStores(){
    return [ChatStore];
  }

  // Gets called when there is a change in state in Subscriptions
  static getPropsFromStores(){
    return ChatStore.getState();
  }

  // Had to assign this to App
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){

    var view = <Login />;

    if(this.props.user){
      view = (
        <div>
          <div style={{
              display: 'flex',
              flexFlow: 'row wrap',
              maxWidth: 1200,
              width: '100%',
              margin: '30px auto 30px'
          }}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      )
    }

    return (
      <div>
        <AppBar title="Awesome Chat App" />
        {{view}}
      </div>
    );
  }
}

export default App;
