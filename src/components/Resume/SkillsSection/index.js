import React from 'react';
import style from './SkillsSection.module.scss';
import SectionHeading from '../SectionHeading';
import data from './data';

const SkillsSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="skills" />
    <ul className={style.list}>
      {
        Object.keys(data).map(key => (
          <li className={style.listItem}>
            <span className={style.listItemHeading}>
              {`${key} : `}
            </span>
            <span>
              {data[key]}
            </span>
          </li>))
      }
    </ul>
  </div>
);

export default SkillsSection;
