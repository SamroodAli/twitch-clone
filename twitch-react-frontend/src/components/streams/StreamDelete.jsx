import React from "react";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  actions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button ">Cancel</button>
      </React.Fragment>
    );
  };

  render = () => (
    <div>
      Delete streams
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream ?"
        actions={this.actions}
        onDismiss={() => {
          history.push("/");
        }}
      />
    </div>
  );
}

export default StreamDelete;
