import React from 'react';
import './Style.css';
import './App.css';
import HeaderSection from './HeaderSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import StrengthSection from './StrengthSection';
import PersonalDetailsSection from './PersonalDetailsSection';
import SocialProfileSection from './SocialProfileSection';
import style from './Resume.module.scss';

const Resume = () => (
  <div id="page_1">
    <HeaderSection className={style.section} />
    <EducationSection className={style.section} />
    <ExperienceSection className={style.section} />
    <SkillsSection className={style.section} />
    <StrengthSection className={style.section} />
    <PersonalDetailsSection className={style.section} />
    <SocialProfileSection className={style.section} />
  </div>
);

export default Resume;
