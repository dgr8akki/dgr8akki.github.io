import React, { Fragment } from 'react';
import style from './SocialProfileSection.module.scss';
import SectionHeading from '../SectionHeading';

const SocialProfileSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="social profiles" />
    <p className="p17">
      <span className="ft4">G</span>
      <span className="ft5">ITHUB</span>
      <span className="ft10">: </span>
      <a href="https://github.com/dgr8akki">
        <span className="ft11">https://github.com/dgr8akki</span>
      </a>
      <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="ft4">L</span>
        <span className="ft5">INKEDIN</span>
        <span className="ft10">: </span>
        <a href="https://www.linkedin.com/in/dgr8akki/">
          <span className="ft11">https://www.linkedin.com/in/dgr8akki/</span>
        </a>
      </span>
    </p>
  </div>
);

export default SocialProfileSection;
