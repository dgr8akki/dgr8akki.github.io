import React, { Fragment } from 'react';
import style from './ExperienceSection.module.scss';
import SectionHeading from '../SectionHeading';
import data from './data';

const ExperienceSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="work experience" />
    {
      data.map(object => (
        <Fragment>
          <div className={style.universityDetails}>
            <div className={style.city}>{object.position}</div>
            <div className={style.school}>{object.company}</div>
            <div className={style.duration}>{object.duration}</div>
          </div>
          <div className={style.desc}>{object.info}</div>
          <span className={style.rolesHeading}>➢ Roles & Responsibilities:</span>
          <ul className={style.otherInfoList}>
            {
              object
                .responsibilities
                .map(detail => <li className={style.otherInfoListItem}>{detail}</li>)
            }
          </ul>
        </Fragment>
      ))
    }
  </div>
);

export default ExperienceSection;
