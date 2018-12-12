import React, { Fragment } from 'react';
import style from './PersonalDetailsSection.module.scss';
import SectionHeading from '../SectionHeading';

const PersonalDetailsSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="personal details" />
    <p className="p15 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Date of birth: 7</span>
      <span className="ft23">th </span>
      Nov 1995
    </p>
    <p className="p4 ft25">
      <span className="ft8">•</span>
      <span className="ft24">Languages: English and Hindi</span>
    </p>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Nationality: Indian</span>
    </p>
  </div>
);

export default PersonalDetailsSection;
