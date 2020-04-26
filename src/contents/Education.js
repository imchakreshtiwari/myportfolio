import React, { Component } from 'react';
import Widecard from '../components/WideCard';
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="B.Tech Software Engineering"
          where="Iet "
          from="July 2014"
          to="2018"
        />
        <Widecard
          title="SSLC | HSC"
          where="MDBL INTER College"
          from="2011"
          to="2013"
       / >
      </div>
    );
  }
}
export default Education;