import React from 'react';
import style from './HeaderSection.module.scss';

const HeaderSection = ({ className }) => (
  <div className={`${className} ${style.headerWrapper}`}>
    <div className={style.personalInfo}>
      <div>Hi-TechCity</div>
      <div>Hyderabad, TS</div>
    </div>
    <div className={style.name}>
      <span className={style.heading}>A</span>
      {' A K A S H'}
      <span className={style.heading}>P</span>
      {' A H U J A'}
    </div>
    <div className={style.contactInfo}>
      <div>(+91) 799-592-4034</div>
      <div>pahujaaakash5@gmail.com</div>
    </div>
  </div>
);

export default HeaderSection;
