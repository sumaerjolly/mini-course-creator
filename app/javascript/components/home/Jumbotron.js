import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 250px 0;
  color: white;
`;

function Jumbotron() {
  return (
    <div>
      <Section className="home-section--1">
        <div className="container">
          <div className="row">
            <div className="col col-sm col-md-5">
              <div className="pt-4 mt-4">
                <h1>React For Rails Developers</h1>
                <p>SuperCharge your Ruby on Rails App with React.js</p>
              </div>
            </div>
            <div className="col col-sm col-md-7">
              <div className="pt-4 mt-4 text-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/B0SxxHAImhc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Jumbotron;