import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Courses from "./components/Courses";
import Contributions from "./components/Contributions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EMPrivacyPolicy from "./components/EMPrivacyPolicy";

interface MyProps {
  value?: any;
}
interface MyState {
  value?: any;
}

class App extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
            <Container>
        <Switch>
          <Route path="/em-privacy-policy">
            <EMPrivacyPolicy />
          </Route>
          <Route path="/">
              <Hero />
              <Projects />
              <OtherProjects />
              <Courses />
              <Contributions />
          </Route>
        </Switch>
            </Container>
      </Router>
    );
  }
}

export default App;
