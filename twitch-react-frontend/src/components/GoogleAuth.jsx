import { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "223090150646-46o3fcmm064vrj3se89njlrm9tfd068c.apps.googleusercontent.com",
        scope: "email",
      });
      this.auth = window.gapi.auth2.getAuthInstance();
      this.changeAuthState(); // first time check
      this.auth.isSignedIn.listen(this.changeAuthState); // on every signed in status change
    });
  }

  changeAuthState = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
