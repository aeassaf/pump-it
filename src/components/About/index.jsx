import './index.css';
import React from 'react';

class aboutPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="aboutStyle flexContainer">
        The following is a website that helps you to get car services near your current location.
        <br />
        To use the app please allow your browser to have access to your current location, then
        select what you wish.
        <br />
        <br />
        I did this app during my 2019 summer internship at PostLight.
        <br />
        <br />
        Owner: Antoine Elias Assaf
        <br />
        If you have any feedbacks or requests please contact: eliasassaf.antoine@gmail.com
        <br />
        Special Thanks To The PostLight Team!
        {' '}
      </div>
    );
  }
}

export default aboutPage;
