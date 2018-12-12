import React, { Fragment } from 'react';
import style from './SkillsSection.module.scss';
import SectionHeading from '../SectionHeading';

const SkillsSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="skills" />
    <table cellPadding={0} cellSpacing={0} className="t5">
      <tr>
        <td className="tr0 td13">
          <p className="p11 ft10">
            <span className="ft4">Languages:</span>
            JavaScript and Java
          </p>
        </td>
        <td className="tr0 td13">
          <p className="p3 ft10">
            <span className="ft4">Front End: </span>
            HTML 5, CSS 3, SASS, SCSS
          </p>
        </td>
      </tr>
      <tr>
        <td className="tr0 td14">
          <p className="p11 ft4">
            Client Scripting:
            {' '}
            <span className="ft10">jQuery and React</span>
          </p>
        </td>
        <td className="tr0 td14">
          <p className="p12 ft10">
            <span className="ft4">Responsive Design: </span>
            Bootstrap and Flexbox
          </p>
        </td>
      </tr>
      <tr>
        <td className="tr0 td14">
          <p className="p11 ft4">
            <nobr>Server-Side</nobr>
            Rendering Scripting:
            {' '}
            <span className="ft10">Redux and Next.js</span>
          </p>
        </td>
        <td className="tr0 td14">
          <p className="p12 ft4">
            Build Management Tools:
            {' '}
            <span className="ft10">Maven, Gulp, Webpack</span>
          </p>
        </td>
      </tr>
      <tr>
        <td className="tr0 td14">
          <p className="p11 ft10">
            <span className="ft4">CI Tools: </span>
            Jenkins and Travis CI
          </p>
        </td>
        <td className="tr0 td14">
          <p className="p12 ft4">
            Logging Framework:
            {' '}
            <span className="ft10">Log4J</span>
          </p>
        </td>
      </tr>
      <tr>
        <td className="tr2 td14">
          <p className="p11 ft4">
            Operating System:
            {' '}
            <span className="ft10">Windows and Linux</span>
          </p>
        </td>
        <td className="tr2 td14">
          <p className="p12 ft10">
            <span className="ft4">Testing Framework: </span>
            TestNg, Rest Assured, Selenium
          </p>
        </td>
      </tr>
    </table>
  </div>
);

export default SkillsSection;
