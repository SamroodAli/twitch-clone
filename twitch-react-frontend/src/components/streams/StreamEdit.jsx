import { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={this.props.stream}
          />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
