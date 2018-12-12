import React, { Fragment } from 'react';
import style from './StrengthSection.module.scss';
import SectionHeading from '../SectionHeading';

const StrengthSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="strengths" />
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Familiar with working in an </span>
      <span className="ft4">Agile </span>
      environment with
      {' '}
      <span className="ft4">Scrum </span>
      Model.
    </p>
    <p className="p13 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Good in </span>
      <span className="ft4">Designing </span>
      and
      {' '}
      <span className="ft4">Developing </span>
      responsive websites.
    </p>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Strong working ability in </span>
      <span className="ft4">JavaScript </span>
      and
      {' '}
      <span className="ft4">Java.</span>
    </p>
    <p className="p4 ft4">
      <span className="ft8">•</span>
      <span className="ft9">Good understanding of </span>
      Data Structures
      {' '}
      <span className="ft10">and </span>
      Algorithms.
    </p>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Can adapt to work with any language.</span>
    </p>
  </div>
);

export default StrengthSection;
