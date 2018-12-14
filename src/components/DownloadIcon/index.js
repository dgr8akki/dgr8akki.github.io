import React from 'react';
import style from './DownloadIcon.module.scss';
import icon from './icon.png';
import AakashPahujaResume from './AakashPahujaResume.pdf';

const DownloadIcon = () => (
  <div className={style.iconWrapper}>
    <a href={AakashPahujaResume} download>
      <img
        alt="icon"
        src={icon}
        height={18}
        width={18}
      />
    </a>
  </div>
);

export default DownloadIcon;
