import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem leftAvatar={<Avatar src="http://lh3.googleusercontent.com/-cUnaUcKUMU8/AAAAAAAAAAI/AAAAAAAANho/Ch_KeCt5SN8/s120-c/photo.jpg" />}>{this.props.message}</ListItem>
    );
  }
}

export default Message;
