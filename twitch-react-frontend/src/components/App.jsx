import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return (
    <div>
      <button>Click me</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Route path="/pageTwo" component={PageOne} />
      <Route path="/" exact component={PageTwo} />
    </Router>
  );
};

export default App;
