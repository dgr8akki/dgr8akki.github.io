import React from 'react';
import style from './ExperienceSection.module.scss';
import SectionHeading from '../SectionHeading';

const ExperienceSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="work experience" />
    <table cellPadding={0} cellSpacing={0} className="t3">
      <tr>
        <td className="tr0 td8">
          <p className="p3 ft4">Software Development Engineer</p>
        </td>
        <td className="tr0 td9">
          <p className="p3 ft4">KONY INDIA PVT. LTD. , HYDERABAD</p>
        </td>
        <td className="tr0 td10">
          <p className="p3 ft7">Aug 2017 – Now</p>
        </td>
      </tr>
    </table>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Worked on </span>
      <span className="ft4">Kony Marketplace Platform </span>
      <a href="https://marketplace.kony.com/">
        <span className="ft11">(</span>
      </a>
      <a href="https://marketplace.kony.com/">
        <span className="ft11">https://marketplace.kony.com</span>
      </a>
      <span className="ft11">).</span>
    </p>
    <p className="p6 ft15">
      <span className="ft13">➢</span>
      <span className="ft14">Roles & Responsibilities:</span>
    </p>
    <p className="p7 ft7">
      <span className="ft16">▪</span>
      <span className="ft9">Develop </span>
      Marketplace2.0
      {' '}
      <span className="ft3">with optimized performance and </span>
      google page insight score
      {' '}
      <span className="ft3">of </span>
      94.
    </p>
    <p className="p8 ft15">
      <span className="ft16">▪</span>
      <span className="ft18">
          Also develop Private marketplace which enables the customers to view
          and share components only in their organizationwith highsecurity.
      </span>
    </p>
    <p className="p8 ft15">
      <span className="ft16">▪</span>
      <span className="ft18">Design and developed </span>
      <span className="ft19">Kony Marketplace Platform </span>
      for customers and community to showcase their components built in Kony
      Visualizer.
    </p>
    <p className="p9 ft15">
      <span className="ft16">▪</span>
      <span className="ft18">
          Owned and Orchestrated the complete designing and development of
        {' '}
      </span>
      <span className="ft19">Automation Testing Engine</span>
      in java which provides a dailyreport for
      {' '}
      <span className="ft19">Website</span>
      and
      {' '}
      <span className="ft19">APIs </span>
      tests status whichresulted inincreased customerbase and enrich product
      quality.
    </p>
    <p className="p7 ft3">
      <span className="ft16">▪</span>
      <span className="ft17">Develop APIs for marketplace platform in </span>
      <span className="ft7">Drupal </span>
      in
      {' '}
      <span className="ft7">PHP </span>
      as language.
    </p>
    <table cellPadding={0} cellSpacing={0} className="t4">
      <tr>
        <td className="tr0 td8">
          <p className="p3 ft4">Associate Software Engineer</p>
        </td>
        <td className="tr0 td11">
          <p className="p3 ft4">KONY INDIA PVT. LTD. , HYDERABAD</p>
        </td>
        <td className="tr0 td12">
          <p className="p3 ft7">
            <span className="ft4">Aug </span>
            2016 – Aug 2017
          </p>
        </td>
      </tr>
    </table>
    <p className="p4 ft10">
      <span className="ft8">•</span>
      <span className="ft9">Worked on </span>
      <span className="ft4">Kony Web portals </span>
      <a href="https://www.kony.com/">
        <span className="ft11">(</span>
      </a>
      <a href="https://www.kony.com/">
        <span className="ft11">https://www.kony.com</span>
      </a>
      <span className="ft10"> & </span>
      <a href="https://community.kony.com/">
        <span className="ft11">https://community.kony.com/</span>
      </a>
      <span className="ft11">).</span>
    </p>
    <p className="p6 ft15">
      <span className="ft13">➢</span>
      <span className="ft14">Roles & Responsibilities:</span>
    </p>
    <p className="p7">
      <span className="ft16">▪</span>
      <span className="ft18">Develop responsiveness to </span>
      <span className="ft19">Kony Marketplace platform </span>
      <a href="https://community.kony.com/marketplace">
        <span className="ft15">(</span>
      </a>
      <a href="https://community.kony.com/marketplace">
        <span className="ft20">https://community.kony.com/marketplace</span>
      </a>
      <span className="ft15">)</span>
    </p>
    <p className="p7 ft3">
      <span className="ft16">▪</span>
      <span className="ft17">Develop front End of </span>
      <span className="ft7">Kony Web portals</span>
    </p>
    <p className="p7 ft15">
      <span className="ft16">▪</span>
      <span className="ft18">Develop APIs for marketplace platform in </span>
      <span className="ft19">Drupal </span>
      in
      {' '}
      <span className="ft19">PHP </span>
      as language.
    </p>
    <p className="p7 ft3">
      <span className="ft16">▪</span>
      <span className="ft17">Contribute to </span>
      <span className="ft7">Drupal.org </span>
      community by creating a patch for the module (Fancyselect).
    </p>
  </div>
);

export default ExperienceSection;
