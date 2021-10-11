import { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    console.log("yeah I ran");
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
