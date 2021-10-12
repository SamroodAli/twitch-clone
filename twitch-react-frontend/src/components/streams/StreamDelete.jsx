import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button ">Cancel</button>
      </React.Fragment>
    );
  };

  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  render = () => (
    <div>
      Delete streams
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream ?"
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    </div>
  );
}

export default connect(null, { fetchStream })(StreamDelete);
