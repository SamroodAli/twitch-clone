import { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return "DELETE/EDIT";
    }
  };

  renderStreams = () =>
    this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth: { userId } }) => {
  return {
    streams: Object.values(streams),
    currentUserId: userId,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
