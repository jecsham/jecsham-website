import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Hero from './components/Hero';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Courses from './components/Courses';
import Contributions from './components/Contributions';

interface MyProps {
  value?: any
}
interface MyState {
  value?: any;
}

class App extends Component<MyProps, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Hero />
        <Projects />
        <OtherProjects />
        <Courses />
        <Contributions />
      </Container>
    );

  }
}

export default App;
