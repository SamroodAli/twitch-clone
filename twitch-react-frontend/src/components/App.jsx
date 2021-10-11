import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={StreamList} />
      <Route path="/streams/show" component={StreamShow} />
      <Route path="/streams/new" component={StreamCreate} />
      <Route path="/streams/edit" component={StreamEdit} />
      <Route path="/streams/delete" component={StreamDelete} />
    </Router>
  );
};

export default App;
