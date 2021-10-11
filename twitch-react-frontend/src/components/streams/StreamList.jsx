import { Component } from "react";
import { connect } from "redux";

class StreamList extends Component {
  render() {
    return (
      <div>
        <p>Hello lists</p>
      </div>
    );
  }
}

export default connect()(StreamList);
