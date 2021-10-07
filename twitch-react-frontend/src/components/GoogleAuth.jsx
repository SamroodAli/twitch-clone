import { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {});
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
