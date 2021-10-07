import { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "223090150646-46o3fcmm064vrj3se89njlrm9tfd068c.apps.googleusercontent.com",
        scope: "email",
      });
      this.auth = window.gapi.auth2.getAuthInstance();
      this.changeAuthState(this.auth.isSignedIn.get()); // first time check
      this.auth.isSignedIn.listen(this.changeAuthState); // called automatically on every signed in status change with this.auth.isSignedIn.get() as argument
    });
  }

  changeAuthState = (isSignedIn) => {
    if (isSignedIn) {
      const currentUserId = this.auth.currentUser.get().getId();
      this.props.signIn(currentUserId);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn().catch(() => {});
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { isSignedIn: auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
