import React, { Fragment } from 'react';
import style from './EducationSection.module.scss';
import SectionHeading from '../SectionHeading';

const EducationSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="education" />
    <table cellPadding={0} cellSpacing={0} className="t0">
      <tr>
        <td className="tr0 td0">
          <p className="p3 ft4">Ambala, IN</p>
        </td>
        <td className="tr0 td1">
          <p className="p3 ft4">Maharishi Markandeshwar University</p>
        </td>
        <td className="tr0 td2">
          <p className="p3 ft7">Fall 2013 – May 2017</p>
        </td>
      </tr>
    </table>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">
          B. Tech. in Computer Science as major, May 2017 with 8.9 CGPA.
      </span>
    </p>
    <table cellPadding={0} cellSpacing={0} className="t1">
      <tr>
        <td className="tr1 td3">
          <p className="p3 ft4">Gurgaon, IN</p>
        </td>
        <td className="tr1 td4">
          <p className="p3 ft4">
            Dev Samaj Vidya Niketan Sr. Sec. School, CBSE
          </p>
        </td>
        <td className="tr1 td5">
          <p className="p3 ft7">Fall 2011 – March 2013</p>
        </td>
      </tr>
    </table>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">
          Completed Senior Secondary Education, March 2013 with 80%.
      </span>
    </p>
    <table cellPadding={0} cellSpacing={0} className="t2">
      <tr>
        <td className="tr0 td6">
          <p className="p3 ft4">Gurgaon, IN</p>
        </td>
        <td className="tr0 td7">
          <p className="p3 ft4">Lady Florence Convent School, CBSE</p>
        </td>
        <td className="tr0 td5">
          <p className="p3 ft7">Fall 2010 – March 2011</p>
        </td>
      </tr>
    </table>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">
          Completed Matriculation, March 2011 with 9.6 CGPA.
      </span>
    </p>
  </div>
);

export default EducationSection;
