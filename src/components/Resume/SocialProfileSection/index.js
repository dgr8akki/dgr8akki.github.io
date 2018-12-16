import React from 'react';
import style from './SocialProfileSection.module.scss';
import SectionHeading from '../SectionHeading';
import data from './data';

const SocialProfileSection = ({ className }) => (
  <div className={className}>
    <SectionHeading heading="social profiles" />
    <div className={style.contentWrapper}>
      {
        data.map(
          (socialProfile) => {
            const { url } = socialProfile;
            let { title } = socialProfile;
            title = title.toUpperCase();
            return (
              <div className={style.headingWrapper}>
                <span>
                  <span className={style.heading}>
                    {title.substr(0, 1)}
                  </span>
                  {`${title.substr(1, socialProfile.title.length - 1)} : `}
                </span>
                <a href={url} className={`${style.heading} ${style.link}`}>{url}</a>
              </div>
            );
          },
        )
      }
    </div>
  </div>
);

export default SocialProfileSection;
