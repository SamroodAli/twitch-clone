import { Component } from "react";
import { connect } from "redux";
import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return (
      <div>
        <p>Hello lists</p>
      </div>
    );
  }
}

export default connect(null, { fetchStreams })(StreamList);
