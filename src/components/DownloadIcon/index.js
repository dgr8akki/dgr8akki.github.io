import React from 'react';
import './Style.css';
import icon from "./icon.png";
import AakashPahujaResume from './AakashPahujaResume.pdf';

const DownloadIcon = () => (
  <div class="iconWrapper">
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
