import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
// ES7 decorators with introspection! ^^ aka reflection
// makes these decorators available on local variables
import ChannelSource from '../sources/ChannelSources';
import _ from 'lodash';

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
  constructor(){
    this.state = {user: null};
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels){
    let selectedChannel;
    _(channels)
      .keys()
      .each((key, index) => {
        channels[key].key = key;
        if(index == 0){
          channels[key].selected = true;
          selectedChannel = channels[key];
        }
      })
      .value();

    // ES6: if no attribute value, just use variable name as value
    this.setState({
      channels,
      selectedChannel
    });
  }

  @bind(Actions.channelsFailed)
  errorOnChannels(error){
    console.log(error);
  }

  // binds this function with actions/login
  @bind(Actions.login)
  login(user){
    this.setState({user: user});
  }
}

export default alt.createStore(ChatStore);
