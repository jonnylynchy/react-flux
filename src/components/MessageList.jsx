import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'Uh, huhlloh there!???, how are you?',
        'I am fine! How are you? No, really?!',
        'And seriously, you?',
        'What about you sucka?',
        'Oh yeah!',
        'How about another message?'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message message={message} />
      );
    });

    return (
      <Card>
          <List>{messageNodes}</List>
      </Card>
    )
  }
}

export default MessageList;
