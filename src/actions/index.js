import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  constructor(){
    this.generateActions(
      'channelsReceived',
      'channelsFailed'
    );
  }

  login(args){
    return (dispatch) => {
      var firebaseRef = new Firebase('https://react-flux-test-app.firebaseio.com');
      firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if(error){
          console.log(error);
          return;
        }
        // if login is successful - pass user to dispatch
        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);
