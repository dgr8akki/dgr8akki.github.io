import React, { Fragment } from 'react';
import style from './HeaderSection.module.scss';

const HeaderSection = () => (
  <Fragment>
    <div id="tx1">
      <span className="ft2">(+91) </span>
      <nobr>
        <span className="ft2">799-592-4034</span>
      </nobr>
      <span className="ft0" />
      <span className="ft2">pahujaaakash5@gmail.com</span>
    </div>
    <div id="id1_1">
      <div id="id1_1_1">
        <p className="p0 ft2">
          <nobr>Hi-Tech</nobr>
          City
        </p>
        <p className="p1 ft3">Hyderabad, TS</p>
      </div>
      <div id="id1_1_2">
        <p className="p0 font-small">
          <span className="font-head">A</span>
          {' '}
          A K A S H
          <span className="font-head">&nbsp;&nbsp;P</span>
          {' '}
          A H U J A
        </p>
      </div>
    </div>
  </Fragment>
);

export default HeaderSection;
