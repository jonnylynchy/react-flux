import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {Card, CardText, RaisedButton} = mui;

class Login extends React.Component {
  onClick(){
    Actions.login();
    console.log('logging in...');
  }

  render(){
    return (
      <Card style={{
          'maxWidth': '800px',
          'margin': '30px auto',
          'padding': '50px'
      }}>
        <CardText style={{
            'textAlign': 'center'
        }}>
          To start chatting like you are cray-cray, please login via google. Thanks!
        </CardText>
        <RaisedButton style={{
            'display': 'block'
        }} onClick={this.onClick.bind(this)} label="Log in with Google">

        </RaisedButton>
      </Card>
    );
  }
}

export default Login;
