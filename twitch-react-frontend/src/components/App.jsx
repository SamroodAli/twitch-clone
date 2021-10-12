import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={StreamList} />
      <Route path="/streams/show" component={StreamShow} />
      <Route path="/streams/new" component={StreamCreate} />
      <Route path="/streams/edit/:id" component={StreamEdit} />
      <Route path="/streams/delete/:id" component={StreamDelete} />
    </Router>
  );
};

export default App;
