import React, { Fragment } from 'react';
import style from './EducationSection.module.scss';
import SectionHeading from '../SectionHeading';
import data from './data';

const EducationSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="education" />
    {
      data.map(object => (
        <Fragment>
          <div className={style.universityDetails}>
            <div className={style.city}>{object.city}</div>
            <div className={style.school}>{object.school}</div>
            <div className={style.duration}>{object.duration}</div>
          </div>
          <ul className={style.otherInfoList}>
            {
              object.info.map(detail => <li className={style.otherInfoListItem}>{detail}</li>)
            }
          </ul>
        </Fragment>
      ))
    }
  </div>
);

export default EducationSection;
