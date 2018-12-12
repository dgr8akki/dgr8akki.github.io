import React from 'react';
import style from './HeaderSection.module.scss';

const HeaderSection = ({ className }) => (
  <div className={className}>
    <div id="tx1">
      <span className="ft2">(+91) 799-592-4034 </span>
      <span className="ft2">pahujaaakash5@gmail.com</span>
    </div>
    <div id="id1_1">
      <div id="id1_1_1">
        <p className="p0 ft2">Hi-TechCity</p>
        <p className="p1 ft3">Hyderabad, TS</p>
      </div>
      <div id="id1_1_2">
        <p className="p0 font-small">
          <span className="font-head">A</span>
          {' A K A S H '}
          <span className="font-head">&nbsp;P</span>
          {' A H U J A'}
        </p>
      </div>
    </div>
  </div>
);

export default HeaderSection;
