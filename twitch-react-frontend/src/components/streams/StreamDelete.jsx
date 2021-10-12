import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            this.props.deleteStream(id);
          }}
        >
          Delete
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream";
    }
    return `Are you sure you want to delete this stream with title ${this.props.stream.title}`;
  }

  render = () => (
    <Modal
      title="Delete stream"
      content={this.renderContent()}
      actions={this.renderActions()}
      onDismiss={() => {
        history.push("/");
      }}
    />
  );
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
