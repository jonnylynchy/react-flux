import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

var {Card} = mui;

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }

    this.firebaseRef = new Firebase('https://react-flux-test-app.firebaseio.com/messages');
  }

  onChange(e){
    this.setState({
      message: e.target.value
    });
  }

  onKeyUp(e){
    if(e.keyCode === 13 && trim(e.target.value) != ''){
      e.preventDefault();

      this.firebaseRef.push({
        message: this.state.message
      });

      this.setState({
        message: ''
      });

      //console.log('Sent a new message: ', e.target.value);
    }
  }

  render(){
    return (
      <Card style={{
          maxWidth: '1200px',
          margin: '30px auto',
          padding: 30
      }}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
        }} />
      </Card>
    );
  }
}

export default MessageBox;
