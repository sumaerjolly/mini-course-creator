import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      course_modules: [
        {
          id: 1,
          title: '1. Setting up a new ROR app with React',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          active: false
        },
        {
          id: 2,
          title: '2. Adding react to an existing rails app',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          active: false
        },
        {
          id: 3,
          title: '3. Building a hello world app',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          active: false
        },
        {
          id: 4,
          title: '4. Adding React Router Dom to your App',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          active: false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
