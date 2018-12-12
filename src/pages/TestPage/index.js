import React, { Component } from 'react';
import Resume from '../../components/Resume';
import style from './testPage.module.scss';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Resume />
      </div>
    );
  }
}

TestPage.propTypes = {
};

TestPage.defaultProps = {
};

export default TestPage;
