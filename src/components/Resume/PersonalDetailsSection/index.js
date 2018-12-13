import React, { Fragment } from 'react';
import style from './PersonalDetailsSection.module.scss';
import SectionHeading from '../SectionHeading';
import data from './data.json';

const PersonalDetailsSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="personal details" />
    <ul className={style.list}>
      {
        Object.keys(data).map(key => (
          <li className={style.listItem}>
            {`${key} : ${data[key]}`}
          </li>))
      }
    </ul>
  </div>
);

export default PersonalDetailsSection;
