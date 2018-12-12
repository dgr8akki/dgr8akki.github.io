import React, { Component } from 'react';
import Resume from '../../components/Resume';
import DownloadIcon from '../../components/DownloadIcon';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Resume />
        <DownloadIcon />
      </div>
    );
  }
}

LandingPage.propTypes = {
};

LandingPage.defaultProps = {
};

export default LandingPage;
